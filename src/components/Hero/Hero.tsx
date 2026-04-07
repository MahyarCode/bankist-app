import React from "react";

const Hero: React.FC = () => {
  return (
    <>
      <div className="grid grid-cols-[55%_45%] h-screen w-full snap-start items-center border-b border-gray-300 px-30 bg-gray-200 ">
        <div className="grid grid-rows-3 justify-center font-averia">
          <div className="grid row-start-2 ">
            <p className="text-5xl relative font-bold">
              When{" "}
              <span className="absolute::after bg-green-300 -z-1">banking</span>{" "}
              meets{" "}
              <span className="absolute::after bg-green-300 -z-1">
                minimalist
              </span>
            </p>
            <p className="text-3xl">
              A simpler banking experience for a simpler life.
            </p>
            <button className="underline text-green-600 grid justify-start">
              Learn more
            </button>
          </div>
        </div>
        <div className="grid justify-center">
          <img src="./hero.png" className="h-100 w-auto" />
        </div>
      </div>
    </>
  );
};

export default Hero;
