import Area from './Area';
import Player from '../Player';
import { BasicResource } from '../Resource';
import { Tile } from './Tiles';

export default class Board {
  private grid: Array<Area> = [];

  constructor(grid: Array<Area>) {
    this.grid = grid;
  }

  public getNeighbors(target: Area): Array<Area> {
    return [];
  }

  public doPlacementBonus(target: Area, tile: Tile, player: Player) {
    // get area bonus
    for (let resource in target.bonus) {
      player.receive(
        resource as BasicResource,
        target.bonus[resource as BasicResource] || 0
      );

      if (
        Player.name === 'Mining Guild' &&
        (resource === BasicResource.STEEL ||
          resource === BasicResource.TITANIUM)
      ) {
      }
    }

    // oceans

    //
  }

  public placeOcean(player: Player): void {}

  public placeGreenery(player: Player): void {}
}
