import React from "react";
import PeopleReviews from "./PeopleReviews";

const Reviews: React.FC = () => {
  return (
    <>
      <div className="py-30 px-10 border-b border-gray-400 bg-gray-200 ">
        <div className="grid grid-cols-4 w-full mb-10">
          <div className="grid justify-start col-start-2 col-span-2 font-averia">
            <h1 className="text-green-600 text-xl ">REVIEWS</h1>
            <p className="text-4xl">
              Millions of Bankists users are already making their lives simpler.
            </p>
          </div>
        </div>
        <div>
          <PeopleReviews />
        </div>
      </div>
    </>
  );
};

export default Reviews;
