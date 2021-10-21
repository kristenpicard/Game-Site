import React from "react";
import Button from "../Button/Button.js";

function Row(props) {
  return (
    <>
      <tr style={{ display: "flex" }}>
        <Button
          clickHandler={props.clickHandler}
          id={props.button1id}
          buttonText={props.button1Text}
        ></Button>
        <Button
          clickHandler={props.clickHandler}
          id={props.button2id}
          buttonText={props.button2Text}
        ></Button>
        <Button
          clickHandler={props.clickHandler}
          id={props.button3id}
          buttonText={props.button3Text}
        ></Button>
      </tr>
    </>
  );
}

export default Row;
