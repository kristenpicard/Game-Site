import React from "react";
import Row from "../Row/Row.js";

function Table(props) {
  return (
    <table>
      <tbody>
        <Row
          clickHandler={props.clickHandler}
          button1id={props.button1id}
          button1Text={props.button1Text}
          button2id={props.button2id}
          button2Text={props.button2Text}
          button3id={props.button3id}
          button3Text={props.button3Text}
          button4id={props.button4id}
          button4Text={props.button4Text}
        ></Row>
        <Row
          clickHandler={props.clickHandler}
          button1id={props.button5id}
          button1Text={props.button5Text}
          button2id={props.button6id}
          button2Text={props.button6Text}
          button3id={props.button7id}
          button3Text={props.button7Text}
          button4id={props.button8id}
          button4Text={props.button8Text}
        ></Row>
      </tbody>
    </table>
  );
}

export default Table;
