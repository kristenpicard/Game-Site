import React from "react";
import "../Game/matchGame.css";

function Button(props) {
  return (
    <>
      <button
        className="matchgameButton"
        onClick={props.clickHandler}
        id={props.id}
      >
        {props.buttonText}
      </button>
    </>
  );
}

export default Button;
