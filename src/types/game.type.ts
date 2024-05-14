import { Player } from "./player.type";

export type Game = {
  title: string;
  board: (string | null)[];
  currentPlayer: Player;
  winner: Player | null;
  gameOver: boolean;
  moves: number;
  startGame: () => void;
  resetGame: () => void;
  clickTile: (tile: Element, index: number) => void;
  nextPlayer: () => void;
  setPlayer: (player: Player) => void;
  getWinner: () => void;
  init: () => void;
};
