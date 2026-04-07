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

  let content = (
    <div className="flex flex-col  items-center">
      <div className="flex box-border w-full rounded-2xl h-auto border mt-8">
        <div className="p-4">
          <p>Please Select one of the tabs.</p>
        </div>
      </div>
    </div>
  );

  if (selectedButton !== null)
    content = (
      <div className="flex flex-col items-center">
        <div className="flex box-border w-3/5 rounded-2xl h-auto border mt-8">
          <div className="p-4">
            {example[selectedButton] && (
              <svg>
                <use xlinkHref={example[selectedButton].img}></use>
              </svg>
            )}
            <h1 className="font-averia text-2xl font-bold ">
              {example[selectedButton].title}
            </h1>

            <p className="font-averia text-xl text-justify">
              {example[selectedButton].text}
            </p>
          </div>
        </div>
      </div>
    );

  return (
    <>
      <div className="py-30 px-10">
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
                >
                  1. Instant Transfers
                </TabButtons>
                <TabButtons
                  color="bg-green-300"
                  onSelect={() => handleOperationTabsAndContent(1)}
                >
                  2. Instant Loans
                </TabButtons>
                <TabButtons
                  color="bg-red-300"
                  onSelect={() => handleOperationTabsAndContent(2)}
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
