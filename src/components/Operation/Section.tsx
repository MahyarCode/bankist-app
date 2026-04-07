import React from "react";

const Section: React.FC<{
  title: string;
  text: string;
  children: React.ReactNode;
}> = ({ title, text, children }) => {
  return (
    <section className="relative">
      <div className="grid grid-cols-4 w-full mb-10">
        <div className="grid justify-start col-start-2 col-span-2 font-averia">
          <h1 className="text-green-600 text-xl ">{title}</h1>
          <p className="text-4xl">{text}</p>
        </div>
      </div>
      {children}
    </section>
  );
};

export default Section;
