import React, { useCallback, useState } from "react";
import { reviewsData } from "../../data/reviewsData";

const PeopleReviews: React.FC = () => {
  const [reviewIndex, setReviewIndex] = useState<number>(0);

  const handleReviewNavigation = useCallback(
    (navigate: string) => {
      if (navigate === "next") {
        if (reviewIndex === reviewsData.length - 1) {
          setReviewIndex(0);
        } else {
          setReviewIndex((prev) => prev + 1);
        }
      } else if (navigate === "previous") {
        if (reviewIndex === 0) {
          setReviewIndex(reviewsData.length - 1);
        } else {
          setReviewIndex((prev) => prev - 1);
        }
      }
    },
    [reviewIndex],
  );

  const handleReviewCircleButtonClick = useCallback((indexNumber: number) => {
    setReviewIndex(indexNumber);
  }, []);

  return (
    <>
      <div className="grid grid-cols-[15%_70%_15%] font-averia">
        <div className="grid col-start-2 bg-green-200 rounded-2xl">
          <div className="flex">
            <div>
              <img
                src={reviewsData[reviewIndex].profile.img}
                className="w-30 py-4 pl-4 rounded-full"
              />
            </div>
            <div className="flex flex-col ">
              <div>
                <p className="pl-8 pt-8 text-2xl">
                  {reviewsData[reviewIndex].profile.name}
                </p>
              </div>
              <div>
                <p className="pl-8 text-xl">
                  {reviewsData[reviewIndex].profile.location}
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-[15%_70%_15%] justify-self-center h-75 mt-8 ">
            <div className="grid justify-center items-center h-40">
              <button
                onClick={() => handleReviewNavigation("previous")}
                className="text-2xl size-10 hover:cursor-pointer"
              >
                ⬅️
              </button>
            </div>
            <div className="grid justify-self-center">
              <h1 className="text-2xl font-bold">
                {reviewsData[reviewIndex].title}
              </h1>
              <p className="text-2xl text-justify">
                {reviewsData[reviewIndex].text}
              </p>
            </div>
            <div className="grid justify-center items-center h-40">
              <button
                onClick={() => handleReviewNavigation("next")}
                className="text-2xl size-10 hover:cursor-pointer"
              >
                ➡️
              </button>
            </div>
          </div>
          <div className="flex justify-center pb-4">
            <div className="flex gap-3">
              {reviewsData.map((_, index) => {
                return (
                  <button
                    key={index}
                    className={`${index === reviewIndex ? "bg-gray-600" : "bg-gray-400"} w-3 h-3 rounded-full hover:cursor-pointer p-2`}
                    onClick={() => handleReviewCircleButtonClick(index)}
                  ></button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PeopleReviews;
