import Game from './Game';
import Player from './Player';

export default interface Card {
  name: string;
  cost: number;
  play: (game: Game, player: Player) => Game | undefined;
}
