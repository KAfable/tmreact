export interface ICard {
  name: string;
  cost: number;
  play: (game: Game, player: Player) => Game | undefined;
}
