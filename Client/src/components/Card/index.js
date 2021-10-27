import React from "react";
import styles from "./Card.module.css";

function Card(props) {
  return (
    <>
      <div className={styles.Card}>
        <h1>{props.title}</h1>
        {props.children}
      </div>
    </>
  );
}

export default Card;
