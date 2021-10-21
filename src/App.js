import Card from "./components/Card/index.js";
import Header from "./components/Header/header.js";
import Game from "./components/TicTacToe/Game/Game.js";

function App() {
  return (
    <>
      <Header />
      <Card title={"Tic Tac Toe"} children={<Game />} />
    </>
  );
}

export default App;
