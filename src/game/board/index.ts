import Area from './Area';
import Player from '../Player';
import { BasicResource } from '../Resource';
import { Tile } from './Tiles';

export default class Board {
  private grid: Array<Area> = [];
  private oxygen: Number = 0;
  private temperature: Number = -30;
  private oceanCount: Number = 0;

  constructor(grid: Array<Area>) {
    this.grid = grid;
  }

  public getTemperature(): Number {
    return this.temperature;
  }

  public getOxygen(): Number {
    return this.oxygen;
  }

  public getOceanCount(): Number {
    return this.oceanCount;
  }

  public getNeighbors(target: Area): Array<Area> {
    return this.grid;
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

export enum GlobalParameter {
  OXYGEN = 'oxygen',
  TEMP = 'temperature',
  OCEAN_COUNT = 'ocean count',
  VENUS = 'venus',
}
