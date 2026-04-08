import React from "react";
const Tabs: React.FC<{
  children: React.ReactNode;
  buttons: React.ReactNode;
}> = ({ children, buttons }) => {
  return (
    <>
      <div className="flex flex-col items-center ">
        <menu>
          <div className="flex gap-20 *:border *:rounded-full *:p-3 **:cursor-pointer mt-20">
            {buttons}
          </div>
        </menu>
        {children}
      </div>
    </>
  );
};

export default Tabs;
