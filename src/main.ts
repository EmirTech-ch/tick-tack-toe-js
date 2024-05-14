import "./style.css";
import GameController from "./controllers/game.controller";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
<div class="wrapper">
<button id="reset">Reset</button>
<div class="player-info-box">
  <div class="player-info player-x">
    <h2>Player X</h2>
    <p>Wins: <span id="playerXWins">0</span></p>
  </div>
  <div class="player-info player-o">
    <h2>Player O</h2>
    <p>Wins: <span id="playerOWins">0</span></p>
  </div>
</div>
<div class="tile__wrapper">
  <div class="tile__row">
    <div class="tile">&nbsp;</div>
    <div class="tile">&nbsp;</div>
    <div class="tile">&nbsp;</div>
  </div>
  <div class="tile__row">
    <div class="tile">&nbsp;</div>
    <div class="tile">&nbsp;</div>
    <div class="tile">&nbsp;</div>
  </div>
  <div class="tile__row">
    <div class="tile">&nbsp;</div>
    <div class="tile">&nbsp;</div>
    <div class="tile">&nbsp;</div>
  </div>
</div>
</div>
</div>
`;

const playerXDOM = document.querySelector(".player-x");
const playerODOM = document.querySelector(".player-o");
const tiles = document.querySelectorAll(".tile");
const resetButtonDOM = document.getElementById("reset");

const game = GameController(playerXDOM, playerODOM, tiles, resetButtonDOM);
game.startGame();
