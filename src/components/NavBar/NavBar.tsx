import React from "react";

const NavBar: React.FC = () => {
  return (
    <>
      <div className="flex fixed justify-between bg-white z-50 w-full h-20 px-10 border-transparent rounded-4xl shadow-green-200 shadow-2xl">
        <div className="flex items-center">
          <img src="./logo.png" className="h-11" />
        </div>
        <div className="flex gap-4 font-averia text-xl **:hover:cursor-pointer *:hover:text-red-500">
          <button>Feature</button>
          <button>Operations</button>
          <button>Testimonials</button>
          <div className="flex items-center hover:text-blue-500!">
            <button className="border-transparent bg-green-400 rounded-4xl p-3 ">
              Open Account
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
