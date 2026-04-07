import React from "react";

const TabButtons: React.FC<{ children: React.ReactNode; color: string }> = ({
  children,
  color,
}) => {
  return (
    <li className={`${color}`}>
      <button>{children}</button>
    </li>
  );
};

export default TabButtons;
