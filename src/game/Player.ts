import { BasicResource } from './Resource';
import Card from './card';
import { Tags } from './card/Tags';

export default class Player {
  public tags: TagCount = startingTags;
  private resources = startingResources;
  private production = startingProduction;
  public name: string = '';
  public steelValue: number = 2; // Advanced Alloys
  public titaniumValue: number = 3; // Advanced Alloys
  private greeneryPlantCost: number = 8; // Ecoline
  private hand: Array<Card> = [];
  public corporation?: Card;

  constructor(name: string) {
    this.name = name;
  }

  public getResource(resource: BasicResource): number {
    return this.resources[resource];
  }

  public getProduction(resource: BasicResource): number {
    return this.production[resource];
  }

  public adjustResource(input: ResourceAmount): void {
    const { resource, amount } = input;
    this.resources[resource] += amount;
  }

  public adjustProduction(input: ResourceAmount): void {
    const { resource, amount } = input;
    this.production[resource] += amount;
  }

  public pay(resource: BasicResource, amount: number): boolean {
    // pay 2 steel + 1 gold
    // does this also bring up the UI?
    //

    return true;
  }

  public receive(resource: BasicResource, amount: number): boolean {
    return true;
  }

  public playFromHand(card: Card, payment: Array<ResourceAmount>): void {
    // doesn't check playability or illegal states (see isPlayable)

    // remove resources

    // remove card from hand

    // add to played cards

    // add tags to player tags
    if (card.tags.length) {
      for (let tag of card.tags) {
        this.tags[tag] += 1;
      }
    }
  }
}

export type ResourceAmount = {
  resource: BasicResource;
  amount: number;
};

type TagCount = {
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
};

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

const startingResources = {
  [BasicResource.MEGACREDITS]: 0,
  [BasicResource.STEEL]: 0,
  [BasicResource.TITANIUM]: 0,
  [BasicResource.PLANTS]: 0,
  [BasicResource.ENERGY]: 0,
  [BasicResource.HEAT]: 0,
};

const startingProduction = {
  [BasicResource.MEGACREDITS]: 0,
  [BasicResource.STEEL]: 0,
  [BasicResource.TITANIUM]: 0,
  [BasicResource.PLANTS]: 0,
  [BasicResource.ENERGY]: 0,
  [BasicResource.HEAT]: 0,
};
