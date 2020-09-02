import CardBuilder from '../cardBuilder';
import { BasicResource } from '../Resource';
import { Tags } from './Tags';
import Game from '../Game';
import Player from '../Player';

export default class Card {
  public name: string = '';
  public resources: Array<BasicResource> = [];
  public cost: number = 0;
  public tags: Array<Tags> = [];
  public victoryPoints?: number;

  constructor(cardBuilder: CardBuilder) {
    this.name = name;
  }

  play(game: Game, player: Player) {}
}
