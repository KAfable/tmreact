import { Tile } from './Tiles';
import { BasicResource } from '../Resource';

export default class Area {
  public type: AreaType;
  public tile?: Tile | undefined;
  public bonus?: AreaBonus;
  public x: number;
  public y: number;

  constructor(x: number, y: number, type: AreaType, bonus: AreaBonus) {
    this.bonus = bonus;
    this.type = type;
    this.x = x;
    this.y = y;
  }
}

export enum AreaType {
  NORMAL,
  OCEAN,
  CITY,
  LAVA,
  PHOBOS,
  GANYMEDE,
}

// https://stackoverflow.com/questions/39701524/using-enum-as-interface-key-in-typescript
export interface AreaBonus {
  [BasicResource.MEGACREDITS]?: number;
  [BasicResource.STEEL]?: number;
  [BasicResource.TITANIUM]?: number;
  [BasicResource.PLANTS]?: number;
  [BasicResource.HEAT]?: number;
  cards?: number;
}
