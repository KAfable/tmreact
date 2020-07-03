import Player from './Player';
import Board from './board';

export default class Game {
  public players: Array<Player> = [];
  // needs a board
  // needs milestones
  // needs awards

  constructor(players: Array<Player>) {
    this.players = players;
  }
}
