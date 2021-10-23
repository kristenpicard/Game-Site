import Card from "./components/Card/index.js";
import Header from "./components/Header/header.js";
import Game2 from "./components/MatchGame/Game/Game.js";
import Game from "./components/TicTacToe/Game/Game.js";

function App() {
  return (
    <>
      <Header />
      <table>
        <tbody>
          <tr style={{ display: "flex" }}>
            <Card title={"Tic Tac Toe"} children={<Game />} />
            <Card title={"Match Game"} children={<Game2 />} />
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default App;
