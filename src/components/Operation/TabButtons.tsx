import React from "react";

const TabButtons: React.FC<{
  children: React.ReactNode;
  color: string;
  onSelect: () => void;
}> = ({ children, color, onSelect }) => {
  return (
    <li className={`${color}`} onClick={onSelect}>
      <button>{children}</button>
    </li>
  );
};

export default TabButtons;
