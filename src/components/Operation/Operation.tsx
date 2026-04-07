import React, { useState } from "react";
import Section from "./Section";
import Tabs from "./Tabs";
import TabButtons from "./TabButtons";

const Operation: React.FC = () => {
  // const [operationText, setOperationText] = useState<>();

  // function handleOperationTabsAndContent(buttonDescription) {
  //   setOperationText(buttonDescription);
  // }

  // let content = (
  //   <div className="flex flex-col justify-center items-center">
  //     <div className="flex box-border w-3/5 rounded-2xl h-auto border mt-8">
  //       <div className="p-4">
  //         {operationText.img && (
  //           <svg>
  //             <use xlinkHref={operationText.img}></use>
  //           </svg>
  //         )}
  //         <h1 className="font-averia text-2xl font-bold "></h1>

  //         <p className="font-averia text-xl text-justify"></p>
  //       </div>
  //     </div>
  //   </div>
  // );

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
                <TabButtons color="bg-yellow-300">
                  1. Instant Transfers
                </TabButtons>
                <TabButtons color="bg-green-300">2. Instant Loans</TabButtons>
                <TabButtons color="bg-red-300">3. Instant Closing</TabButtons>
              </>
            }
          >
            {/* {content} */}
          </Tabs>
        </Section>
      </div>
    </>
  );
};

export default Operation;
