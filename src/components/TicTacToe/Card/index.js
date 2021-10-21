import React from "react";
import Game from "../Game/Game.js";
import styles from "./Card.module.css";

function Card() {
  return (
    <>
      <div className={styles.Card}>
        <h1>Tic Tac Toe</h1>
        <Game></Game>
      </div>
    </>
  );
}

export default Card;
