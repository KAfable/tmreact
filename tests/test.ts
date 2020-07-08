import Player from '../src/game/Player';
import Game from '../src/game/Game';
import TitaniumMine from '../src/game/cards/TitaniumMine';
import { BasicResource } from '../src/game/Resource';

const bob = new Player('Bob');
const bill = new Player('Bill');
const game = new Game([bob, bill]);

const mine = new TitaniumMine();

bob.pay(BasicResource.MEGACREDITS, -20);

console.log(mine.play(game, bob));
