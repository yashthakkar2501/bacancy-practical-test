import React from "react";
import PropTypes from "prop-types";
import Bar from "./Bar";

function ProgressBar({ stages, color, stageText }) {
  const jsxToParse = () => {
    return stages.map((stage) => (
      <Bar key={stage.id} color={color} completed={stage.completed} />
    ));
  };
  return [
    <div className='progressBars'>{jsxToParse()}</div>,
    <div style={{ display: "flex", justifyContent: "center" }}>
      {stageText}
    </div>,
  ];
}

ProgressBar.propTypes = {
  stages: PropTypes.array.isRequired,
};

export default ProgressBar;
