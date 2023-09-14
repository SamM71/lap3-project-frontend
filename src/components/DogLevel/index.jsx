import React, { useState, useEffect } from "react";

const DogLevel = ({ taskCount }) => {
  const [level, setLevel] = useState(0);

  useEffect(() => {
    const newLevel = (taskCount / 10) * 100;
    setLevel(newLevel);
  }, [taskCount]);

  const handleButtonClick = () => {
    if (level < 100) {
      setLevel(level + 20);
    }
  };

  const handleButtonReset = () => {
    setLevel(0);
  };

  const getColor = () => {
    if (level < 40) {
      return "#ff0000";
    } else if (level < 70) {
      return "#ffa500";
    } else {
      return "#2ecc71";
    }
  };

  return (
    <div className="dog-level-container">
      <div className="progress-bar">
        <div
          className="progress-bar-fill"
          style={{ width: `${level}%`, backgroundColor: getColor() }}
        ></div>
      </div>
      <div className="progress-label">Happiness: {level}%</div>
      {/* <button onClick={handleButtonClick}>Level</button>
      <button onClick={handleButtonReset}>Reset</button> */}
    </div>
  );
};

export default DogLevel;
