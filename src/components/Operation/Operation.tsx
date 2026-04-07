import React, { useState } from "react";
import Section from "./Section";
import Tabs from "./Tabs";
import TabButtons from "./TabButtons";
import { example } from "../../data/example";

const Operation: React.FC = () => {
  const [selectedButton, setSelectedButton] = useState<number | null>(null);

  function handleOperationTabsAndContent(buttonIndex: number) {
    setSelectedButton(buttonIndex);
  }

  let backgroundColorBasedOnIndex;

  if (selectedButton === 0) {
    backgroundColorBasedOnIndex = "bg-yellow-300";
  } else if (selectedButton === 1) {
    backgroundColorBasedOnIndex = "bg-green-300";
  } else {
    backgroundColorBasedOnIndex = "bg-red-300";
  }

  let content = (
    <div className="flex justify-center  w-screen border-t border-b mt-8">
      <div className="flex w-3/6 flex-center items-center ">
        <div className="flex w-full  rounded-2xl h-auto ">
          <div className="p-4">
            <p className="font-averia">Please Select one of the tabs.</p>
          </div>
        </div>
      </div>
    </div>
  );

  if (selectedButton !== null)
    content = (
      <div className="flex flex-col items-center border-t border-b mt-8">
        <div className="flex w-3/5 rounded-2xl h-auto  ">
          <div className="grid grid-cols-[30%_70%] p-4 justify-start">
            {example[selectedButton] && (
              <div className="grid  items-center justify-center">
                <svg
                  className={`w-40 h-auto ${backgroundColorBasedOnIndex} rounded-full`}
                >
                  <use xlinkHref={example[selectedButton].img}></use>
                </svg>
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
      <div className="py-30 px-10 border-b-gray-300">
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
