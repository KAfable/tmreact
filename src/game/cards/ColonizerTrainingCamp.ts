import Card from '../Card';
import Game from '../Game';
import Player from '../Player';
import { BasicResource } from '../Resource';

export default class ColonizerTrainingCamp implements Card {
  public name = 'Colonizer Training Camp';
  public cardNum = '1';
  public cost = 8;
  public type = 'Automated';
  public deck = 'Basic';

  public play(game: Game, player: Player) {
    if (player.pay(BasicResource.MEGACREDITS, this.cost)) {
      player.adjustTitaniumProduction(1);
    }
    return game;
  }
}