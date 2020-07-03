import Card from '../Card';
import Game from '../Game';
import Player from '../Player';
import { BasicResource } from '../Resource';

export default class TitaniumMine implements Card {
  public name = 'Titanium Mine';
  public cost = 7;

  // play the titanium mine
  // and then what?

  public play(game: Game, player: Player) {
    if (player.pay(BasicResource.MEGACREDITS, this.cost)) {
      player.adjustTitaniumProduction(1);
    }
    return game;
  }
}
