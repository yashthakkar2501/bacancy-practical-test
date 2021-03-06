import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Bar from "./Bar";

function ProgressBar({ stages, color }) {
  const [StageText, setStageText] = useState("Process yet to start");
  useEffect(() => {
    stages.forEach((element) => {
      if (element.completed) {
        setStageText(element.text);
      }
    });
  }, [stages]);

  const jsxToParse = () => {
    return stages.map((stage) => (
      <Bar key={stage.id} color={color} completed={stage.completed} />
    ));
  };
  return [
    <div className='progressBars'>{jsxToParse()}</div>,
    <div style={{ display: "flex", justifyContent: "center" }}>
      {StageText}
    </div>,
  ];
}

ProgressBar.propTypes = {
  stages: PropTypes.array.isRequired,
};

export default ProgressBar;
