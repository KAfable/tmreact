import Player from './Player';
import Board from './board';
import Card from './card';

const MAX_OXYGEN = 14;
const MAX_TEMPERATURE = 8;
const MAX_OCEANS = 9;
const STARTING_TEMP = -30;
const STARTING_OXYGEN = 0;
const STARTING_OCEAN = 0;
const STARTING_VENUS = 0;

export default class Game {
  public players: Array<Player> = [];
  public deck: Array<Card> = [];
  public discard: Array<Card> = [];
  private parameters = {
    [GlobalParameter.OXYGEN]: STARTING_OXYGEN,
    [GlobalParameter.TEMP]: STARTING_TEMP,
    [GlobalParameter.OCEAN_COUNT]: STARTING_OCEAN,
    [GlobalParameter.VENUS]: STARTING_VENUS,
  };

  // needs a board
  // needs milestones
  // needs awards

  constructor(players: Array<Player>) {
    this.players = players;
  }

  public increaseOceanCount() {
    if (this.parameters[GlobalParameter.OCEAN_COUNT] < MAX_OCEANS)
      this.parameters[GlobalParameter.OCEAN_COUNT]++;
  }
  public increaseOxygen() {
    if (this.parameters[GlobalParameter.OXYGEN] < MAX_OXYGEN)
      this.parameters[GlobalParameter.OXYGEN]++;
  }
  public increaseTemperature() {
    if (this.parameters[GlobalParameter.TEMP] < MAX_TEMPERATURE)
      this.parameters[GlobalParameter.TEMP] += 2;
  }

  getParameter(param: GlobalParameter) {
    return this.parameters[param];
  }
}

export enum GlobalParameter {
  OXYGEN = 'oxygen',
  TEMP = 'temperature',
  OCEAN_COUNT = 'oceanCount',
  VENUS = 'venus',
}
