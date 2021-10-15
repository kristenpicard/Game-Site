import React from "react";
import styles from "./Card.module.css";

function Card() {
  return (
    <>
      <div className={styles.Card}>
        <h1>Name of Game</h1>
        <div>Game will go here</div>{" "}
      </div>
      {/* <div class={styles.drops}>
        <div class={styles.drop1}></div>
        <div class={styles.drop2}></div>
        <div class={styles.drop3}></div>
        <div class={styles.drop4}></div>
      </div> */}
    </>
  );
}

export default Card;
