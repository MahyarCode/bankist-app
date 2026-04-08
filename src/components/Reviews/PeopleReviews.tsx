import React from "react";

const PeopleReviews: React.FC = () => {
  return (
    <>
      <div className="grid grid-cols-[15%_70%_15%] font-averia">
        <div className="grid col-start-2 bg-green-200 rounded-2xl">
          <div className="flex">
            <div>
              <img src="./user-1.jpg" className="w-30 py-4 pl-4 rounded-full" />
            </div>
            <div className="flex flex-col ">
              <div>
                <p className="pl-8 pt-8 text-2xl">Mahyar MousvaiNia</p>
              </div>
              <div>
                <p className="pl-8 text-xl">Yerevan, Armenia</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-[15%_70%_15%] justify-self-center h-75 mt-8 ">
            <div className="grid justify-center items-center h-40">
              <button className="text-2xl">⬅️</button>
            </div>
            <div className="grid justify-self-center">
              <p className="text-2xl text-justify">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Accusantium quas quisquam non? Quas voluptate nulla minima
                deleniti optio ullam nesciunt, numquam corporis et asperiores
                laboriosam sunt, praesentium suscipit blanditiis. Necessitatibus
                id alias reiciendis, perferendis facere pariatur dolore veniam
                autem esse non voluptatem saepe provident nihil molestiae.
              </p>
            </div>
            <div className="grid justify-center items-center h-40">
              <button className="text-2xl">➡️</button>
            </div>
          </div>
          <div className="flex justify-center pb-4">
            <div className="flex gap-3">
              <button className="bg-gray-600 w-3 h-3 rounded-full"></button>
              <button className="bg-gray-400 w-3 h-3 rounded-full"></button>
              <button className="bg-gray-400 w-3 h-3 rounded-full"></button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PeopleReviews;
