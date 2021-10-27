import React from "react";
import Table from "../Table/Table.js";
import "./matchGame.css";

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bestScore: "",
    };
    this.emojiArray = ["🪁", "🪁", "🎪", "🎪", "🎢", "🎢", "👕", "👕"];
    this.chosen = { element1: "", element2: "", firstCardID: "" };
    this.isElement1Defined = false;
    this.isElement2Defined = false;
    this.result = this.randomizeEmojis(this.emojiArray);

    this.lastEventID = "";
    this.firstCard = "";
    this.secondCard = "";
    this.button1 = "";
    this.button2 = "";
    this.button3 = "";
    this.button4 = "";
    this.button5 = "";
    this.button6 = "";
    this.button7 = "";
    this.button8 = "";

    this.win = "";

    this.score = 0;
    // this.bestScore = 0;

    this.handleClick = this.handleClick.bind(this);
    this.checkIfSame = this.checkIfSame.bind(this);
    this.resetMatchBoard = this.resetMatchBoard.bind(this);
    this.checkForBestScore = this.checkForBestScore.bind(this);
  }

  randomizeEmojis(array) {
    let currentIndex = array.length,
      randomIndex;

    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }

  waitInSeconds(func, n) {
    setTimeout(func, n * 1000);
  }

  checkIfSame(firstCardID, secondCardID) {
    if (firstCardID === "card1") {
      this.firstCard = this.button1;
    } else if (firstCardID === "card2") {
      this.firstCard = this.button2;
    } else if (firstCardID === "card3") {
      this.firstCard = this.button3;
    } else if (firstCardID === "card4") {
      this.firstCard = this.button4;
    } else if (firstCardID === "card5") {
      this.firstCard = this.button5;
    } else if (firstCardID === "card6") {
      this.firstCard = this.button6;
    } else if (firstCardID === "card7") {
      this.firstCard = this.button7;
    } else if (firstCardID === "card8") {
      this.firstCard = this.button8;
    }

    if (secondCardID === "card1") {
      this.secondCard = this.button1;
    } else if (secondCardID === "card2") {
      this.secondCard = this.button2;
    } else if (secondCardID === "card3") {
      this.secondCard = this.button3;
    } else if (secondCardID === "card4") {
      this.secondCard = this.button4;
    } else if (secondCardID === "card5") {
      this.secondCard = this.button5;
    } else if (secondCardID === "card6") {
      this.secondCard = this.button6;
    } else if (secondCardID === "card7") {
      this.secondCard = this.button7;
    } else if (secondCardID === "card8") {
      this.secondCard = this.button8;
    }

    if (this.firstCard === this.secondCard) {
      //do nothing
    } else {
      if (this.firstCard === this.button1) {
        this.button1 = "";
      }
      if (this.firstCard === this.button2) {
        this.button2 = "";
      }
      if (this.firstCard === this.button3) {
        this.button3 = "";
      }
      if (this.firstCard === this.button4) {
        this.button4 = "";
      }
      if (this.firstCard === this.button5) {
        this.button5 = "";
      }
      if (this.firstCard === this.button6) {
        this.button6 = "";
      }
      if (this.firstCard === this.button7) {
        this.button7 = "";
      }
      if (this.firstCard === this.button8) {
        this.button8 = "";
      }
      if (this.secondCard === this.button1) {
        this.button1 = "";
      }
      if (this.secondCard === this.button2) {
        this.button2 = "";
      }
      if (this.secondCard === this.button3) {
        this.button3 = "";
      }
      if (this.secondCard === this.button4) {
        this.button4 = "";
      }
      if (this.secondCard === this.button5) {
        this.button5 = "";
      }
      if (this.secondCard === this.button6) {
        this.button6 = "";
      }
      if (this.secondCard === this.button7) {
        this.button7 = "";
      }
      if (this.secondCard === this.button8) {
        this.button8 = "";
      }
    }
  }

  didWin(
    button1,
    button2,
    button3,
    button4,
    button5,
    button6,
    button7,
    button8
  ) {
    if (
      button1 !== "" &&
      button2 !== "" &&
      button3 !== "" &&
      button4 !== "" &&
      button5 !== "" &&
      button6 !== "" &&
      button7 !== "" &&
      button8 !== ""
    ) {
      this.win = "You won!";
      this.checkForBestScore(this.state.bestScore, this.score);
    }
  }

  checkForBestScore(bestScore, score) {
    if (this.state.bestScore === "") {
      this.setState({ bestScore: score });
    } else if (bestScore <= score) {
      // do nothing
    } else if (bestScore >= score) {
      this.setState({ bestScore: score });
    }
  }

  handleClick(e) {
    let eventID = e.target.id;

    if (this.chosen["element1"] === "" && this.chosen["element2"] === "") {
      this.isElement1Defined = false;
      this.isElement2Defined = false;
    } else if (
      this.chosen["element1"] !== "" &&
      this.chosen["element2"] !== ""
    ) {
      this.isElement1Defined = true;
      this.isElement2Defined = true;
      this.chosen["element1"] = "";
      this.chosen["element2"] = "";
      this.chosen["firstCardID"] = "";
      this.isElement1Defined = false;
      this.isElement2Defined = false;
    } else if (
      this.chosen["element1"] === "" &&
      this.chosen["element2"] !== ""
    ) {
      this.isElement1Defined = false;
      this.isElement2Defined = true;
    } else if (
      this.chosen["element1"] !== "" &&
      this.chosen["element2"] === ""
    ) {
      this.isElement1Defined = true;
      this.isElement2Defined = false;
    }

    if (eventID === "card1") {
      this.button1 = this.result[0];

      if (
        this.isElement1Defined === false &&
        this.isElement2Defined === false
      ) {
        this.chosen["element1"] = this.result[0];

        this.chosen["firstCardID"] = eventID;
      } else if (
        this.isElement1Defined === true &&
        this.isElement2Defined === false
      ) {
        this.chosen["element2"] = this.result[0];
        this.score++;
      }
    } else if (eventID === "card2") {
      this.button2 = this.result[1];
      if (
        this.isElement1Defined === false &&
        this.isElement2Defined === false
      ) {
        this.chosen["element1"] = this.result[1];
        this.chosen["firstCardID"] = eventID;
      } else if (
        this.isElement1Defined === true &&
        this.isElement2Defined === false
      ) {
        this.chosen["element2"] = this.result[1];
        this.score++;
      }
    } else if (eventID === "card3") {
      this.button3 = this.result[2];
      if (
        this.isElement1Defined === false &&
        this.isElement2Defined === false
      ) {
        this.chosen["element1"] = this.result[2];
        this.chosen["firstCardID"] = eventID;
      } else if (
        this.isElement1Defined === true &&
        this.isElement2Defined === false
      ) {
        this.chosen["element2"] = this.result[2];
        this.score++;
      }
    } else if (eventID === "card4") {
      this.button4 = this.result[3];
      if (
        this.isElement1Defined === false &&
        this.isElement2Defined === false
      ) {
        this.chosen["element1"] = this.result[3];
        this.chosen["firstCardID"] = eventID;
      } else if (
        this.isElement1Defined === true &&
        this.isElement2Defined === false
      ) {
        this.chosen["element2"] = this.result[3];
        this.score++;
      }
    } else if (eventID === "card5") {
      this.button5 = this.result[4];
      if (
        this.isElement1Defined === false &&
        this.isElement2Defined === false
      ) {
        this.chosen["element1"] = this.result[4];
        this.chosen["firstCardID"] = eventID;
      } else if (
        this.isElement1Defined === true &&
        this.isElement2Defined === false
      ) {
        this.chosen["element2"] = this.result[4];
        this.score++;
      }
    } else if (eventID === "card6") {
      this.button6 = this.result[5];
      if (
        this.isElement1Defined === false &&
        this.isElement2Defined === false
      ) {
        this.chosen["element1"] = this.result[5];
        this.chosen["firstCardID"] = eventID;
      } else if (
        this.isElement1Defined === true &&
        this.isElement2Defined === false
      ) {
        this.chosen["element2"] = this.result[5];
        this.score++;
      }
    } else if (eventID === "card7") {
      this.button7 = this.result[6];
      if (
        this.isElement1Defined === false &&
        this.isElement2Defined === false
      ) {
        this.chosen["element1"] = this.result[6];
        this.chosen["firstCardID"] = eventID;
      } else if (
        this.isElement1Defined === true &&
        this.isElement2Defined === false
      ) {
        this.chosen["element2"] = this.result[6];
        this.score++;
      }
    } else if (eventID === "card8") {
      this.button8 = this.result[7];
      if (
        this.isElement1Defined === false &&
        this.isElement2Defined === false
      ) {
        this.chosen["element1"] = this.result[7];
        this.chosen["firstCardID"] = eventID;
      } else if (
        this.isElement1Defined === true &&
        this.isElement2Defined === false
      ) {
        this.chosen["element2"] = this.result[7];
        this.score++;
      }
    }
    this.lastEventID = eventID;
    this.secondUpdate = false;
    this.forceUpdate();
  }

  componentDidUpdate() {
    if (this.secondUpdate === false) {
      this.waitInSeconds(
        function () {
          this.checkIfSame(this.chosen.firstCardID, this.lastEventID);
          this.didWin(
            this.button1,
            this.button2,
            this.button3,
            this.button4,
            this.button5,
            this.button6,
            this.button7,
            this.button8
          );
          this.forceUpdate();
        }.bind(this),
        1
      );
      this.secondUpdate = true;
    }
  }

  resetMatchBoard() {
    this.chosen = { element1: "", element2: "", firstCardID: "" };
    this.isElement1Defined = false;
    this.isElement2Defined = false;
    this.result = this.randomizeEmojis(this.emojiArray);
    this.lastEventID = "";
    this.firstCard = "";
    this.secondCard = "";
    this.button1 = "";
    this.button2 = "";
    this.button3 = "";
    this.button4 = "";
    this.button5 = "";
    this.button6 = "";
    this.button7 = "";
    this.button8 = "";
    this.win = "";
    this.score = 0;
    this.forceUpdate();
  }

  render() {
    return (
      <>
        <div>
          Flip the cards and try and get all 4<br></br>
          matches in as few tries as you can!
        </div>
        <br></br>
        <Table
          clickHandler={this.handleClick}
          button1id="card1"
          button1Text={this.button1}
          button2id="card2"
          button2Text={this.button2}
          button3id="card3"
          button3Text={this.button3}
          button4id="card4"
          button4Text={this.button4}
          button5id="card5"
          button5Text={this.button5}
          button6id="card6"
          button6Text={this.button6}
          button7id="card7"
          button7Text={this.button7}
          button8id="card8"
          button8Text={this.button8}
        ></Table>
        <h1 className="result">Tries: {this.score}</h1>
        <h1 className="result">{this.win}</h1>
        <button onClick={this.resetMatchBoard}>Reset Board</button>
        <h1>Best Score: {this.state.bestScore} tries</h1>
      </>
    );
  }
}

export default Game;
