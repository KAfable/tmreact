import CardBuilder, { GlobalRequirement } from '../cardBuilder';
import { BasicResource } from '../Resource';
import { Tags } from './Tags';
import Game, { GlobalParameter } from '../Game';
import Player from '../Player';

export default class Card {
  public name: string = '';
  public resources: Array<BasicResource> = [];
  public cost: number = 0;
  public tags: Array<Tags> = [];
  public globalReq?: GlobalRequirement;
  public victoryPoints?: number;

  constructor(cardBuilder: CardBuilder) {
    this.name = cardBuilder.name;
    this.cost = cardBuilder.cost;
    this.tags = cardBuilder.tags;
    this.globalReq = cardBuilder.globalReq;
    this.victoryPoints = cardBuilder.victoryPoints;
  }

  isPlayable(game: Game, player: Player): boolean {
    if (this.globalReq) {
      const req = this.globalReq;
      const param = game.getParameter(req.type);
      if (req.min && param < req.amount) return false;
      if (!req.min && param > req.amount) return false;
    }

    // check player resources
    return true;
  }

  play(game: Game, player: Player) {
    // check isPlayable?
    // if there is a cost, pay the cost
    // actually payment should be on the player class, since the player is the one that plays
    // if there are any victory points, add them to the player
    // if there are any changes in global parameters, change them
    // if there are any resources earned, grant them
    // if there are any tags on the card, add to the player
    //
  }
}
