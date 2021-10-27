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
        ></Row>
        <Row
          clickHandler={props.clickHandler}
          button1id={props.button4id}
          button1Text={props.button4Text}
          button2id={props.button5id}
          button2Text={props.button5Text}
          button3id={props.button6id}
          button3Text={props.button6Text}
        ></Row>
        <Row
          clickHandler={props.clickHandler}
          button1id={props.button7id}
          button1Text={props.button7Text}
          button2id={props.button8id}
          button2Text={props.button8Text}
          button3id={props.button9id}
          button3Text={props.button9Text}
        ></Row>
      </tbody>
    </table>
  );
}

export default Table;
