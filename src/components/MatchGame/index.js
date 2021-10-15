import React from "react";

var card1 = document.getElementById("card1");
var card2 = document.getElementById("card2");
var card3 = document.getElementById("card3");
var card4 = document.getElementById("card4");
var card5 = document.getElementById("card5");
var card6 = document.getElementById("card6");
var card7 = document.getElementById("card7");
var card8 = document.getElementById("card8");

card1.innerHTML = "&#160;";
card2.innerHTML = "&#160;";
card3.innerHTML = "&#160;";
card4.innerHTML = "&#160;";
card5.innerHTML = "&#160;";
card6.innerHTML = "&#160;";
card7.innerHTML = "&#160;";
card8.innerHTML = "&#160;";

let chosen = { element1: "", element2: "", firstCardID: "" };
let isElement1Defined = false;
let isElement2Defined = false;

function checkIfSame(firstCardID, secondCardID) {
  let firstCard;
  let secondCard;
  if (firstCardID === "card1") {
    firstCard = card1;
  } else if (firstCardID === "card2") {
    firstCard = card2;
  } else if (firstCardID === "card3") {
    firstCard = card3;
  } else if (firstCardID === "card4") {
    firstCard = card4;
  } else if (firstCardID === "card5") {
    firstCard = card5;
  } else if (firstCardID === "card6") {
    firstCard = card6;
  } else if (firstCardID === "card7") {
    firstCard = card7;
  } else if (firstCardID === "card8") {
    firstCard = card8;
  }

  if (secondCardID === "card1") {
    secondCard = card1;
  } else if (secondCardID === "card2") {
    secondCard = card2;
  } else if (secondCardID === "card3") {
    secondCard = card3;
  } else if (secondCardID === "card4") {
    secondCard = card4;
  } else if (secondCardID === "card5") {
    secondCard = card5;
  } else if (secondCardID === "card6") {
    secondCard = card6;
  } else if (secondCardID === "card7") {
    secondCard = card7;
  } else if (secondCardID === "card8") {
    secondCard = card8;
  }

  if (firstCard.innerHTML === secondCard.innerHTML) {
    //do nothing
  } else {
    firstCard.innerHTML = "&#160;";
    secondCard.innerHTML = "&#160;";
  }
}

function onClick(e) {
  if (chosen["element1"] === "" && chosen["element2"] === "") {
    isElement1Defined = false;
    isElement2Defined = false;
  } else if (chosen["element1"] !== "" && chosen["element2"] !== "") {
    isElement1Defined = true;
    isElement2Defined = true;
    chosen["element1"] = "";
    chosen["element2"] = "";
    chosen["firstCardID"] = "";
    isElement1Defined = false;
    isElement2Defined = false;
  } else if (chosen["element1"] === "" && chosen["element2"] !== "") {
    isElement1Defined = false;
    isElement2Defined = true;
  } else if (chosen["element1"] !== "" && chosen["element2"] === "") {
    isElement1Defined = true;
    isElement2Defined = false;
  }

  if (e.target.id === "card1") {
    card1.innerHTML = "1";
    if (isElement1Defined === false && isElement2Defined === false) {
      chosen["element1"] = 1;
      chosen["firstCardID"] = e.target.id;
    } else if (isElement1Defined === true && isElement2Defined === false) {
      chosen["element2"] = 1;
      checkIfSame(chosen.firstCardID, e.target.id);
    }
  } else if (e.target.id === "card2") {
    card2.innerHTML = "2";
    if (isElement1Defined === false && isElement2Defined === false) {
      console.log("test");
      chosen["element1"] = 2;
      chosen["firstCardID"] = e.target.id;
    } else if (isElement1Defined === true && isElement2Defined === false) {
      chosen["element2"] = 2;
      checkIfSame(chosen.firstCardID, e.target.id);
    }
  } else if (e.target.id === "card3") {
    card3.innerHTML = "3";
    if (isElement1Defined === false && isElement2Defined === false) {
      chosen["element1"] = 3;
      chosen["firstCardID"] = e.target.id;
    } else if (isElement1Defined === true && isElement2Defined === false) {
      chosen["element2"] = 3;
      checkIfSame(chosen.firstCardID, e.target.id);
    }
  } else if (e.target.id === "card4") {
    card4.innerHTML = "4";
    if (isElement1Defined === false && isElement2Defined === false) {
      chosen["element1"] = 4;
      chosen["firstCardID"] = e.target.id;
    } else if (isElement1Defined === true && isElement2Defined === false) {
      chosen["element2"] = 4;
      checkIfSame(chosen.firstCardID, e.target.id);
    }
  } else if (e.target.id === "card5") {
    card5.innerHTML = "1";
    if (isElement1Defined === false && isElement2Defined === false) {
      chosen["element1"] = 1;
      chosen["firstCardID"] = e.target.id;
    } else if (isElement1Defined === true && isElement2Defined === false) {
      chosen["element2"] = 1;
      checkIfSame(chosen.firstCardID, e.target.id);
    }
  } else if (e.target.id === "card6") {
    card6.innerHTML = "2";
    if (isElement1Defined === false && isElement2Defined === false) {
      chosen["element1"] = 2;
      chosen["firstCardID"] = e.target.id;
    } else if (isElement1Defined === true && isElement2Defined === false) {
      chosen["element2"] = 2;
      checkIfSame(chosen.firstCardID, e.target.id);
    }
  } else if (e.target.id === "card7") {
    card7.innerHTML = "3";
    if (isElement1Defined === false && isElement2Defined === false) {
      chosen["element1"] = 3;
      chosen["firstCardID"] = e.target.id;
    } else if (isElement1Defined === true && isElement2Defined === false) {
      chosen["element2"] = 3;
      checkIfSame(chosen.firstCardID, e.target.id);
    }
  } else if (e.target.id === "card8") {
    card8.innerHTML = "4";
    if (isElement1Defined === false && isElement2Defined === false) {
      chosen["element1"] = 4;
      chosen["firstCardID"] = e.target.id;
    } else if (isElement1Defined === true && isElement2Defined === false) {
      chosen["element2"] = 4;
      checkIfSame(chosen.firstCardID, e.target.id);
    }
  }
  //   didWin();
}

card1.addEventListener("click", onClick);
card2.addEventListener("click", onClick);
card3.addEventListener("click", onClick);
card4.addEventListener("click", onClick);
card5.addEventListener("click", onClick);
card6.addEventListener("click", onClick);
card7.addEventListener("click", onClick);
card8.addEventListener("click", onClick);

function MatchGame() {
  return (
    <>
      <table>
        <tr>
          <th>
            <button id="card1">1</button>
          </th>
          <th>
            <button id="card2">2</button>
          </th>
          <th>
            <button id="card3">3</button>
          </th>
          <th>
            <button id="card4">4</button>
          </th>
        </tr>
        <tr>
          <th>
            <button id="card5">1</button>
          </th>
          <th>
            <button id="card6">2</button>
          </th>
          <th>
            <button id="card7">3</button>
          </th>
          <th>
            <button id="card8">4</button>
          </th>
        </tr>
      </table>
    </>
  );
}

export default MatchGame;
