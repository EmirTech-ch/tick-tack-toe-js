import PlayerFactory from "../factories/player.factory";
import { Game } from "../types/game.type";
import { Player } from "../types/player.type";

function GameController(
  playerXDOM: Element | null,
  playerODOM: Element | null,
  tiles: NodeListOf<Element>,
  resetButtonDOM: Element | null
): Game {
  let game = {} as Game;
  const playerX = PlayerFactory("Player X", "X");
  const playerO = PlayerFactory("Player O", "O");
  game.title = "Tic Tac Toe";
  game.board = Array(9).fill(null);
  game.currentPlayer = playerX;
  game.winner = null;
  game.gameOver = false;
  game.moves = 0;

  game.startGame = function () {
    this.init();
  };

  game.resetGame = function () {
    tiles.forEach((tile) => {
      tile.innerHTML = "";
    });
    playerODOM?.classList.remove("player-turn");
    playerXDOM?.classList.remove("player-turn");
    playerODOM?.classList.remove("player-winner");
    playerXDOM?.classList.remove("player-winner");
    this.init();
  };

  game.setPlayer = function (player: Player) {
    this.currentPlayer = player;
  };

  game.init = function () {
    this.board = Array(9).fill(null);
    this.currentPlayer = playerX;
    this.winner = null;
    this.gameOver = false;
    this.moves = 0;
  };

  game.clickTile = function (tile: Element, index: number) {
    if (this.board[index]) return;
    if (this.gameOver) return;
    this.board[index] = this.currentPlayer.symbol;
    tile.textContent = this.currentPlayer.symbol;
    this.moves++;
    playerODOM?.classList.toggle(
      "player-turn",
      this.currentPlayer.symbol === "O"
    );
    playerXDOM?.classList.toggle(
      "player-turn",
      this.currentPlayer.symbol === "X"
    );
    this.nextPlayer();
    this.getWinner();
    if (this.winner) {
      if (this.winner.symbol === playerX.symbol) {
        playerXDOM?.classList.add("player-winner");
      } else {
        playerODOM?.classList.add("player-winner");
      }
    }
  };

  game.nextPlayer = function () {
    if (this.currentPlayer == playerX) this.currentPlayer = playerO;
    else this.currentPlayer = playerX;
  };

  // add dom manipulation
  game.getWinner = function () {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    winningCombinations.forEach((combination) => {
      const [a, b, c] = combination;
      if (
        this.board[a] &&
        this.board[a] === this.board[b] &&
        this.board[a] === this.board[c]
      ) {
        this.winner = this.currentPlayer;
        this.currentPlayer.wins++;
        this.gameOver = true;
      }
    });

    if (this.moves === 9) {
      this.gameOver = true;
    }
  };

  resetButtonDOM?.addEventListener("click", () => {
    game.resetGame();
  });

  tiles.forEach((tile, index) => {
    tile.addEventListener("click", () => {
      game.clickTile(tile, index);
    });
  });

  return game;
}

export default GameController;
