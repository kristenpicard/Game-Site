import React from "react";
import Table from "../Table/Table.js";
import "./Game.css";

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      button1: "",
      button2: "",
      button3: "",
      button4: "",
      button5: "",
      button6: "",
      button7: "",
      button8: "",
      button9: "",
    };
    this.currentPlayer = "O";
    this.isTied = false;
    this.someoneWon = false;
    this.winner = "";
    this.button1 = "";
    this.button2 = "";
    this.button3 = "";
    this.button4 = "";
    this.button5 = "";
    this.button6 = "";
    this.button7 = "";
    this.button8 = "";
    this.button9 = "";

    this.handleClick = this.handleClick.bind(this);
    this.checkForTie = this.checkForTie.bind(this);
  }

  // pure
  flipXandO(player) {
    if (player === "O") {
      return "X";
    }
    if (player === "X") {
      return "O";
    }
  }

  // pure
  checkForWinner(
    button1,
    button2,
    button3,
    button4,
    button5,
    button6,
    button7,
    button8,
    button9
  ) {
    let winner = "";
    if (button1 === "X" && button2 === "X" && button3 === "X") {
      winner = "Player 1";
    } else if (button4 === "X" && button5 === "X" && button6 === "X") {
      winner = "Player 1";
    } else if (button7 === "X" && button8 === "X" && button9 === "X") {
      winner = "Player 1";
    } else if (button1 === "X" && button4 === "X" && button7 === "X") {
      winner = "Player 1";
    } else if (button2 === "X" && button5 === "X" && button8 === "X") {
      winner = "Player 1";
    } else if (button3 === "X" && button6 === "X" && button9 === "X") {
      winner = "Player 1";
    } else if (button1 === "X" && button5 === "X" && button9 === "X") {
      winner = "Player 1";
    } else if (button3 === "X" && button5 === "X" && button7 === "X") {
      winner = "Player 1";
    } else if (button1 === "O" && button2 === "O" && button3 === "O") {
      winner = "Player 2";
    } else if (button4 === "O" && button5 === "O" && button6 === "O") {
      winner = "Player 2";
    } else if (button7 === "O" && button8 === "O" && button9 === "O") {
      winner = "Player 2";
    } else if (button1 === "O" && button4 === "O" && button7 === "O") {
      winner = "Player 2";
    } else if (button2 === "O" && button5 === "O" && button8 === "O") {
      winner = "Player 2";
    } else if (button3 === "O" && button6 === "O" && button9 === "O") {
      winner = "Player 2";
    } else if (button1 === "O" && button5 === "O" && button9 === "O") {
      winner = "Player 2";
    } else if (button3 === "O" && button5 === "O" && button7 === "O") {
      winner = "Player 2";
    }
    console.log("1: " + button1);
    console.log("2: " + button2);
    console.log("3: " + button3);
    console.log(winner);

    return winner;
  }

  // pure
  checkForTie(
    button1,
    button2,
    button3,
    button4,
    button5,
    button6,
    button7,
    button8,
    button9
  ) {
    if (
      button1 !== "" &&
      button2 !== "" &&
      button3 !== "" &&
      button4 !== "" &&
      button5 !== "" &&
      button6 !== "" &&
      button7 !== "" &&
      button8 !== "" &&
      button9 !== ""
    ) {
      return true;
    } else {
      return false;
    }
  }

  handleClick(e) {
    let eventID = e.target.id;
    let eventText = e.target.innerHTML;
    if (eventText !== "X" && eventText !== "O") {
      if (eventID === "button1") {
        this.currentPlayer = this.flipXandO(this.currentPlayer);
        this.button1 = this.currentPlayer;
        this.winner = this.checkForWinner(
          this.button1,
          this.button2,
          this.button3,
          this.button4,
          this.button5,
          this.button6,
          this.button7,
          this.button8,
          this.button9
        );
        this.isTied = this.checkForTie(
          this.button1,
          this.button2,
          this.button3,
          this.button4,
          this.button5,
          this.button6,
          this.button7,
          this.button8,
          this.button9
        );
        this.setState({ button1: this.currentPlayer });
      } else if (eventID === "button2") {
        this.currentPlayer = this.flipXandO(this.currentPlayer);
        this.button2 = this.currentPlayer;
        this.winner = this.checkForWinner(
          this.button1,
          this.button2,
          this.button3,
          this.button4,
          this.button5,
          this.button6,
          this.button7,
          this.button8,
          this.button9
        );
        this.isTied = this.checkForTie(
          this.button1,
          this.button2,
          this.button3,
          this.button4,
          this.button5,
          this.button6,
          this.button7,
          this.button8,
          this.button9
        );
        this.setState({ button2: this.currentPlayer });
      } else if (eventID === "button3") {
        this.currentPlayer = this.flipXandO(this.currentPlayer);
        this.button3 = this.currentPlayer;
        this.winner = this.checkForWinner(
          this.button1,
          this.button2,
          this.button3,
          this.button4,
          this.button5,
          this.button6,
          this.button7,
          this.button8,
          this.button9
        );
        this.isTied = this.checkForTie(
          this.button1,
          this.button2,
          this.button3,
          this.button4,
          this.button5,
          this.button6,
          this.button7,
          this.button8,
          this.button9
        );
        this.setState({ button3: this.currentPlayer });
      } else if (eventID === "button4") {
        this.currentPlayer = this.flipXandO(this.currentPlayer);
        this.button4 = this.currentPlayer;
        this.winner = this.checkForWinner(
          this.button1,
          this.button2,
          this.button3,
          this.button4,
          this.button5,
          this.button6,
          this.button7,
          this.button8,
          this.button9
        );
        this.isTied = this.checkForTie(
          this.button1,
          this.button2,
          this.button3,
          this.button4,
          this.button5,
          this.button6,
          this.button7,
          this.button8,
          this.button9
        );
        this.setState({ button4: this.currentPlayer });
      } else if (eventID === "button5") {
        this.currentPlayer = this.flipXandO(this.currentPlayer);
        this.button5 = this.currentPlayer;
        this.winner = this.checkForWinner(
          this.button1,
          this.button2,
          this.button3,
          this.button4,
          this.button5,
          this.button6,
          this.button7,
          this.button8,
          this.button9
        );
        this.isTied = this.checkForTie(
          this.button1,
          this.button2,
          this.button3,
          this.button4,
          this.button5,
          this.button6,
          this.button7,
          this.button8,
          this.button9
        );
        this.setState({ button5: this.currentPlayer });
      } else if (eventID === "button6") {
        this.currentPlayer = this.flipXandO(this.currentPlayer);
        this.button6 = this.currentPlayer;
        this.winner = this.checkForWinner(
          this.button1,
          this.button2,
          this.button3,
          this.button4,
          this.button5,
          this.button6,
          this.button7,
          this.button8,
          this.button9
        );
        this.isTied = this.checkForTie(
          this.button1,
          this.button2,
          this.button3,
          this.button4,
          this.button5,
          this.button6,
          this.button7,
          this.button8,
          this.button9
        );
        this.setState({ button6: this.currentPlayer });
      } else if (eventID === "button7") {
        this.currentPlayer = this.flipXandO(this.currentPlayer);
        this.button7 = this.currentPlayer;
        this.winner = this.checkForWinner(
          this.button1,
          this.button2,
          this.button3,
          this.button4,
          this.button5,
          this.button6,
          this.button7,
          this.button8,
          this.button9
        );
        this.isTied = this.checkForTie(
          this.button1,
          this.button2,
          this.button3,
          this.button4,
          this.button5,
          this.button6,
          this.button7,
          this.button8,
          this.button9
        );
        this.setState({ button7: this.currentPlayer });
      } else if (eventID === "button8") {
        this.currentPlayer = this.flipXandO(this.currentPlayer);
        this.button8 = this.currentPlayer;
        this.winner = this.checkForWinner(
          this.button1,
          this.button2,
          this.button3,
          this.button4,
          this.button5,
          this.button6,
          this.button7,
          this.button8,
          this.button9
        );
        this.isTied = this.checkForTie(
          this.button1,
          this.button2,
          this.button3,
          this.button4,
          this.button5,
          this.button6,
          this.button7,
          this.button8,
          this.button9
        );
        this.setState({ button8: this.currentPlayer });
      } else if (eventID === "button9") {
        this.currentPlayer = this.flipXandO(this.currentPlayer);
        this.button9 = this.currentPlayer;
        this.winner = this.checkForWinner(
          this.button1,
          this.button2,
          this.button3,
          this.button4,
          this.button5,
          this.button6,
          this.button7,
          this.button8,
          this.button9
        );
        this.isTied = this.checkForTie(
          this.button1,
          this.button2,
          this.button3,
          this.button4,
          this.button5,
          this.button6,
          this.button7,
          this.button8,
          this.button9
        );
        this.setState({ button9: this.currentPlayer });
      }
    }
  }

  render() {
    let tie = this.isTied ? "You tied!" : " ";
    let win = this.winner !== "" ? this.winner + " wins!" : " ";
    return (
      <>
        <div className="gameWrap">
          <Table
            clickHandler={this.handleClick}
            button1id="button1"
            button1Text={this.state.button1}
            button2id="button2"
            button2Text={this.state.button2}
            button3id="button3"
            button3Text={this.state.button3}
            button4id="button4"
            button4Text={this.state.button4}
            button5id="button5"
            button5Text={this.state.button5}
            button6id="button6"
            button6Text={this.state.button6}
            button7id="button7"
            button7Text={this.state.button7}
            button8id="button8"
            button8Text={this.state.button8}
            button9id="button9"
            button9Text={this.state.button9}
          ></Table>
        </div>
        <h1 className="result">
          {tie}
          {win}
        </h1>
      </>
    );
  }
}

export default Game;
