import { BasicResource } from './Resource';
import Card from './card';
import { Tags } from './card/Tags';

export default class Player {
  public tags: TagCount = startingTags;
  public name: string = '';
  private megacredits: number = 0;
  private megacreditProduction: number = 0;
  private steel: number = 0;
  private steelProduction: number = 0;
  public steelValue: number = 2; // Advanced Alloys
  private titanium: number = 0;
  private titaniumProduction: number = 0;
  public titaniumValue: number = 3; // Advanced Alloys
  private plants: number = 0;
  private plantProduction: number = 0;
  public greeneryPlantCost: number = 8; // Ecoline
  private energy: number = 0;
  private energyProduction: number = 0;
  private heat: number = 0;
  private heatProduction: number = 0;
  // private hand: Array<Card> = [];
  public corporation: Card | undefined = undefined;

  constructor(name: string, corp: Card) {
    this.corporation = corp;
    this.name = name;
  }

  public getResource(resource: BasicResource): number {
    if (typeof this[resource] === 'number') return this[resource];
    throw new Error(`Resource ${resource} is not a valid resource.`);
  }

  public getProduction(): number {
    return this.megacreditProduction;
  }

  public pay(resource: BasicResource, amount: number): boolean {
    if (this.getResource(resource) < amount) {
      return false;
    }

    this[resource] -= amount;
    return true;
  }

  public receive(resource: BasicResource, amount: number): void {
    this[resource] += amount;
  }

  public adjustMegaCreditProduction(amount: number): void {
    // MCProduction can go negative
    this.megacreditProduction += amount;
  }

  public adjustSteelProduction(amount: number): boolean {
    if (this.steelProduction + amount < 0) {
      return false;
    }
    this.steelProduction += amount;
    return true;
  }

  public adjustTitaniumProduction(amount: number): boolean {
    if (this.titaniumProduction + amount < 0) {
      return false;
    }
    this.titaniumProduction += amount;
    return true;
  }

  public adjustPlantsProduction(amount: number): boolean {
    if (this.plantProduction + amount < 0) {
      return false;
    }
    this.plantProduction += amount;
    return true;
  }

  public adjustEnergyProduction(amount: number): boolean {
    if (this.energyProduction + amount < 0) {
      return false;
    }
    this.energyProduction += amount;
    return true;
  }

  public adjustHeatProduction(amount: number): boolean {
    if (this.heatProduction + amount < 0) {
      return false;
    }
    this.heatProduction += amount;
    return true;
  }
}

interface TagCount {
  [Tags.BUILDING]: number;
  [Tags.SPACE]: number;
  [Tags.ENERGY]: number;
  [Tags.SCIENCE]: number;
  [Tags.JOVIAN]: number;
  [Tags.EARTH]: number;
  [Tags.PLANT]: number;
  [Tags.MICROBE]: number;
  [Tags.ANIMAL]: number;
  [Tags.CITY]: number;
  [Tags.EVENT]: number;
  [Tags.WILD]: number;
  [Tags.VENUS]: number;
}

const startingTags = {
  [Tags.BUILDING]: 0,
  [Tags.SPACE]: 0,
  [Tags.ENERGY]: 0,
  [Tags.SCIENCE]: 0,
  [Tags.JOVIAN]: 0,
  [Tags.EARTH]: 0,
  [Tags.PLANT]: 0,
  [Tags.MICROBE]: 0,
  [Tags.ANIMAL]: 0,
  [Tags.CITY]: 0,
  [Tags.EVENT]: 0,
  [Tags.WILD]: 0,
  [Tags.VENUS]: 0,
};
