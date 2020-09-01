import Player from './Player';
import Board from './board';
import Card from './card';

const MAX_OXYGEN = 14;
const MAX_TEMPERATURE = 8;
const MAX_OCEANS = 9;
const STARTING_TEMP = -30;
const STARTING_OXYGEN = 0;

export default class Game {
  public players: Array<Player> = [];
  public deck: Array<Card> = [];
  public discard: Array<Card> = [];
  private oxygen: number = STARTING_OXYGEN;
  private temperature: number = STARTING_TEMP;

  // needs a board
  // needs milestones
  // needs awards

  constructor(players: Array<Player>) {
    this.players = players;
  }

  public increaseOxygen() {
    if (this.oxygen < MAX_OXYGEN) this.oxygen++;
  }

  public getOxygen() {
    return this.oxygen;
  }

  public increaseTemperature() {
    if (this.temperature < MAX_TEMPERATURE) this.oxygen += 2;
  }

  public getTemperature() {
    return this.temperature;
  }
}
