import React, { useState } from "react";
import OperationTabs from "./OperationTabs";

interface buttonData {
  title: string;
  text: string;
  img: string;
}

const Operation: React.FC = () => {
  const [operationText, setOperationText] = useState<buttonData>({
    title: "click tabs",
    text: "to show content",
    img: "",
  });

  function handleOperationTabsAndContent(buttonDescription: buttonData) {
    setOperationText(buttonDescription);
  }
  return (
    <>
      <div className="py-30 px-10">
        <div className="grid grid-cols-4 w-full mb-10">
          <div className="grid justify-start col-start-2 col-span-2 font-averia">
            <h1 className="text-green-600 text-xl ">OPERATION</h1>
            <p className="text-4xl">
              Everything as simple as possible, but no simpler.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <OperationTabs handler={handleOperationTabsAndContent} />
          <div className="flex box-border w-3/5 rounded-2xl h-auto border mt-8">
            <div className="p-4">
              {operationText.img && (
                <svg>
                  <use xlinkHref={operationText.img}></use>
                </svg>
              )}
              <h1 className="font-averia text-2xl font-bold ">
                {operationText.title}
              </h1>

              <p className="font-averia text-xl text-justify">
                {operationText.text}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Operation;
