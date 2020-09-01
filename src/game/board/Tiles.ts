import Area /*, { AreaType }*/ from './Area';
// import Player from '../Player';
// import { AreaBonus } from './Area';
// import { BasicResource } from '../Resource';

// TODO
// check if there's any oceans
// check if corporation is Lakeview Resorts for Ocean Bonus
// check if Mining Guild
export class Tile {}

export class Ocean extends Tile {
  public owner = undefined;

  public canBePlaced(grid: Array<Array<Area>>): any {
    // designed to to be a helper function that lets UI highlight legal placements
    // a) Should it return a 2D Array of corresponding booleans?
    // b) Should it actually take in a single space instead, and a boolean (so I should loop it over in a method elsewhere?)
    return true;
  }
}

// export class Greenery implements Tile {
//   public restriction = AreaType.NORMAL;
// }

// export class City implements Tile {}

// export class Lava implements Tile {}

// export class Nuke implements Tile {}

// export class RestrictedArea implements Tile {}

// export class CommercialDistrict implements Tile {}
