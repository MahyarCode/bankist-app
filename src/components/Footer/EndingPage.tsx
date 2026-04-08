import React from "react";
import Footer from "./Footer";

const EndingPage: React.FC = () => {
  return (
    <>
      <div className="grid justify-items-center bg-gray-700 border-b border-gray-500 py-15">
        <h1 className="text-4xl font-averia text-white w-2/4 text-center">
          The best day to join Bankist was one year ago. The second best is
          today!
        </h1>
        <div className="grid justify-items-center py-8">
          <button className="text-2xl bg-green-400 p-4 rounded-full font-averia">
            Open your free account today!
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default EndingPage;
