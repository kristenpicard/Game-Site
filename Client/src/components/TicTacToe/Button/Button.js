import React from "react";
import "../Game/Game.css";

function Button(props) {
  return (
    <>
      <button
        className="tictactoeButton"
        onClick={props.clickHandler}
        id={props.id}
      >
        {props.buttonText}
      </button>
    </>
  );
}

export default Button;
