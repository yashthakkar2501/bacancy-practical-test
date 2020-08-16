import React, { useState, useEffect } from "react";
import "./App.css";
import ProgressBar from "./Components/ProgressBar";
function App() {
  //to add stages manipulate stage state as per requirment add JS object with unique ids
  const [stage, setStage] = useState([
    {
      id: 1,
      text: "Stage 1",
      completed: false,
    },
    {
      id: 2,
      text: "Stage 2",
      completed: false,
    },
    {
      id: 3,
      text: "Stage 3",
      completed: false,
    },
    {
      id: 4,
      text: "Stage 4",
      completed: false,
    },
  ]);
  //this is to replicate scenario where stages can be based on some callout or anything else required
  const startProcess = () => {
    stageCompleted(1);
    for (let i = 2; i <= stage.length + 1; i++) {
      setTimeout(() => {
        stageCompleted(i);
      }, 1000 * i);
    }
  };

  const [uiUpdate, setUiUpdate] = useState(true);

  //sample trial code
  const stageCompleted = (stagenos) => {
    if (stagenos > stage.length) {
      setUiUpdate((prevState) => !prevState);
      return;
    }

    setStage((prevState) => {
      const eleIndex = prevState.findIndex((ele) => ele.id === stagenos);
      let cloneStage = [...prevState];
      cloneStage[eleIndex] = {
        ...cloneStage[eleIndex],
        completed: true,
      };
      return cloneStage;
    });
  };

  //customizable color and stages
  //please edit color at line 61 to edit color as per needs
  return (
    <div className='container'>
      {uiUpdate ? (
        [
          <ProgressBar color='blue' stages={stage} />,
          <button
            style={{ width: "5.5rem", margin: "1rem auto" }}
            onClick={startProcess}
          >
            Start Process
          </button>,
        ]
      ) : (
        <h2 style={{ textAlign: "center" }}>Welcome to Bacancy</h2>
      )}
    </div>
  );
}
export default App;
