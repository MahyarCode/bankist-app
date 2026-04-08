import React, { useState } from "react";
import Section from "./Section";
import Tabs from "./Tabs";
import TabButtons from "./TabButtons";
import { example } from "../../data/operationData";

const Operation: React.FC = () => {
  const [selectedButton, setSelectedButton] = useState<number>(0);

  function handleOperationTabsAndContent(buttonIndex: number) {
    setSelectedButton(buttonIndex);
  }

  let backgroundColorBasedOnIndex;

  if (selectedButton === 0) {
    backgroundColorBasedOnIndex = "bg-yellow-200";
  } else if (selectedButton === 1) {
    backgroundColorBasedOnIndex = "bg-green-200";
  } else {
    backgroundColorBasedOnIndex = "bg-red-200";
  }

  let content;

  if (selectedButton !== null)
    content = (
      <div className="flex w-5/7 flex-col items-center border-transparent bg-white mt-8 relative -top-15 rounded-2xl">
        <div className="flex  rounded-2xl h-auto mt-12">
          <div className="grid grid-cols-[30%_70%] p-4 justify-start">
            {example[selectedButton] && (
              <div className="grid items-center justify-center">
                <div
                  className={`grid items-center justify-center w-40 h-auto ${backgroundColorBasedOnIndex} rounded-full`}
                >
                  <svg className="w-20">
                    <use xlinkHref={example[selectedButton].img}></use>
                  </svg>
                </div>
              </div>
            )}
            <div>
              <h1 className="font-averia text-2xl font-bold mb-8">
                {example[selectedButton].title}
              </h1>

              <p className="font-averia text-xl text-justify">
                {example[selectedButton].text}
              </p>
            </div>
          </div>
        </div>
      </div>
    );

  return (
    <>
      <div className="py-30 px-10 border-b border-gray-400 bg-gray-200 ">
        <Section
          title="OPERATION"
          text="Everything as simple as possible, but no simpler."
        >
          <Tabs
            buttons={
              <>
                <TabButtons
                  color="bg-yellow-300"
                  onSelect={() => handleOperationTabsAndContent(0)}
                  clickedIndex={selectedButton}
                  buttonId={0}
                >
                  1. Instant Transfers
                </TabButtons>
                <TabButtons
                  color="bg-green-300"
                  onSelect={() => handleOperationTabsAndContent(1)}
                  clickedIndex={selectedButton}
                  buttonId={1}
                >
                  2. Instant Loans
                </TabButtons>
                <TabButtons
                  color="bg-red-300"
                  onSelect={() => handleOperationTabsAndContent(2)}
                  clickedIndex={selectedButton}
                  buttonId={2}
                >
                  3. Instant Closing
                </TabButtons>
              </>
            }
          >
            {content}
          </Tabs>
        </Section>
      </div>
    </>
  );
};

export default Operation;
