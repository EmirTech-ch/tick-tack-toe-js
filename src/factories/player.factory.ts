import { Player } from "../types/player.type";

function PlayerFactory(name: string, symbol: string): Player {
  let player = {} as Player;
  player.name = name;
  player.symbol = symbol;
  player.wins = 0;
  return player;
}

export default PlayerFactory;
