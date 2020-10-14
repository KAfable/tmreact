import Card, { TagRequirements } from '../card';
import { ResourceAmount, ProductionAmount } from '../Player';
import { CardNames } from '../cards/CardNames';
import { Tags } from '../card/Tags';
import { GlobalParameter, GlobalParamChange } from '..';

export default class CardBuilder {
  private _id!: string;
  private _name: string;
  private _tags: Array<Tags> = [];
  private _cost?: number;
  private _globalReq?: GlobalRequirement;
  private _tagReq: TagRequirements = startingTags;
  private _victoryPoints?: number;
  private _production: Array<ProductionAmount> = [];
  private _globalParamChanges?: Array<GlobalParamChange>;

  constructor(name: CardNames) {
    this._name = name;
    return this;
  }

  addGlobalRequirement(req: GlobalRequirement) {
    this._globalReq = req;
    return this;
  }

  addTagRequirement(tag: Tags) {
    if (this._tagReq[tag]) {
      this._tagReq[tag] += 1;
    }
    return this;
  }

  addTags(tags: Tags | Array<Tags>): CardBuilder {
    if (Array.isArray(tags)) {
      this._tags = [...this._tags, ...tags];
    } else {
      this._tags = [...this._tags, tags];
    }
    return this;
  }

  addVictoryPoints(points: number) {
    this._victoryPoints = points;
    return this;
  }

  increaseGlobalParameter(param: GlobalParamChange) {
    if (Array.isArray(param)) {
      if (this._globalParamChanges) {
        this._globalParamChanges = [...this._globalParamChanges, ...param];
      } else {
        this._globalParamChanges = [...param];
      }
    } else {
      this._globalParamChanges = [param];
    }
    return this;
  }

  addProduction(production: ProductionAmount | Array<ProductionAmount>) {
    if (Array.isArray(production)) {
      this._production = [...this._production, ...production];
    } else {
      this._production = [...this._production, production];
    }
    return this;
  }

  decreaseProduction(production: ProductionAmount | Array<ProductionAmount>) {
    // TODO
    return this;
  }

  decreaseAnyProduction(prod: ProductionAmount | Array<ProductionAmount>) {
    // TODO
    return this;
  }

  build(): Card {
    // modify the victory points
    // actually are the methods modified here or in the card class itself?
    // modify the global parameter method of the card
    // modify the production changes method of the card
    // modify the tag requirements

    return new Card(this);
  }

  isProject(cost: number): CardBuilder {
    this._cost = cost;
    return this;
  }

  setID(input: string) {
    this._id = input;
    return this;
  }

  get id() {
    return this._id;
  }
  get name() {
    return this._name;
  }
  get cost() {
    return this._cost;
  }
  get tags() {
    return this._tags;
  }
  get globalReq() {
    return this._globalReq;
  }
  get victoryPoints() {
    return this._victoryPoints;
  }
}

const startingTags = {
  [Tags.BUILDING]: 0,
  [Tags.SPACE]: 0,
  [Tags.SCIENCE]: 0,
  [Tags.PLANT]: 0,
  [Tags.MICROBE]: 0,
  [Tags.ANIMAL]: 0,
  [Tags.ENERGY]: 0,
  [Tags.JOVIAN]: 0,
  [Tags.EARTH]: 0,
  [Tags.CITY]: 0,
  [Tags.EVENT]: 0,
  [Tags.WILD]: 0,
  [Tags.VENUS]: 0,
};

export type GlobalRequirement = {
  min: boolean;
  amount: number;
  type: GlobalParameter;
};
