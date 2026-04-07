import React from "react";

const TabButtons: React.FC<{
  children: React.ReactNode;
  color: string;
  onSelect: () => void;
  clickedIndex: number | null;
  buttonId: number;
}> = ({ children, color, onSelect, clickedIndex, buttonId }) => {
  return (
    <li
      className={`${clickedIndex === buttonId ? "font-bold text-2xl relative -top-4" + " " + color : color} font-averia z-10`}
      onClick={onSelect}
    >
      <button className={`${clickedIndex === buttonId ? "underline " : ""}`}>
        {children}
      </button>
    </li>
  );
};

export default TabButtons;
