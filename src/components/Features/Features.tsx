import React from "react";
import SingleFeature from "./SingleFeature";

const Features: React.FC = () => {
  return (
    <div className="py-30 px-10 border-b border-gray-300">
      <div className="grid grid-cols-4 w-full mb-10">
        <div className="grid justify-start col-start-2 col-span-2 font-averia">
          <h1 className="text-green-600 text-xl ">FEATURES</h1>
          <p className="text-4xl">
            Everything you need in a modern bank and more.{" "}
          </p>
        </div>
      </div>
      <div className="grid grid-cols-[50%_50%]">
        <SingleFeature
          image="./card.jpg"
          icon="credit-card"
          title="Free debit card included"
          text="Quasi, fugit in cumque cupiditate reprehenderit debitis animi enim eveniet consequatur odit quam quos possimus assumenda dicta fuga inventore ab."
        />
        <SingleFeature
          image="./digital.jpg"
          icon="monitor"
          title="100% digital bank"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde alias sint quos? Accusantium a fugiat porro reiciendis saepe quibusdam debitis ducimus."
        />
        <SingleFeature
          image="./grow.jpg"
          icon="trending-up"
          title="Watch your money grow"
          text="Nesciunt quos autem dolorum voluptates cum dolores dicta fuga inventore ab? Nulla incidunt eius numquam sequi iste pariatur quibusdam!"
        />
      </div>
    </div>
  );
};

export default Features;
