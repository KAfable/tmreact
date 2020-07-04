import Tile from './tiles/Tile';
import { BasicResource } from '../Resource';

export default interface Area {
  type: AreaType;
  tile?: Tile | undefined;
  bonus?: AreaBonus;
}

export enum AreaType {
  NORMAL,
  OCEAN,
  CITY,
  SPACE,
  LAVA,
}

// https://stackoverflow.com/questions/39701524/using-enum-as-interface-key-in-typescript
interface AreaBonus {
  [BasicResource.MEGACREDITS]?: number;
  [BasicResource.STEEL]?: number;
  [BasicResource.TITANIUM]?: number;
  [BasicResource.PLANTS]?: number;
  [BasicResource.HEAT]?: number;
  cards?: number;
}

export class RegularArea implements Area {
  public type = AreaType.NORMAL;
  public tile = undefined;
  public bonus: AreaBonus | undefined;
  constructor(bonus: AreaBonus) {
    this.bonus = bonus;
  }
}

export class OceanArea implements Area {
  public type = AreaType.OCEAN;
  public tile = undefined;
  public bonus: AreaBonus | undefined;
  constructor(bonus: AreaBonus) {
    this.bonus = bonus;
  }
}

export class CityArea implements Area {
  public type = AreaType.CITY;
  public tile = undefined;
  public bonus: AreaBonus | undefined;
  constructor(bonus: AreaBonus) {
    this.bonus = bonus;
  }
}

export class LavaArea implements Area {
  public type = AreaType.LAVA;
  public tile = undefined;
  public bonus: AreaBonus | undefined;
  constructor(name: string, bonus: AreaBonus) {
    this.bonus = bonus;
  }
}
