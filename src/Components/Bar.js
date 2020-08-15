import React from "react";

const Bar = ({ color, completed }) => {
  const background = completed && color;
  return (
    <div
      className='barBox'
      style={{ backgroundColor: background, border: `1px solid ${color}` }}
    ></div>
  );
};

export default Bar;
