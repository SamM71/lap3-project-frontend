import React from "react";

function TaskPopUp(props) {
  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <button className="close-btn" onClick={() => props.setTrigger(false)}>
          Exit
        </button>
        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
}

export default TaskPopUp;
