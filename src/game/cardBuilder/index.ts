import Card from '../card';
import { ResourceAmount, ProductionAmount } from '../Player';
import { CardNames } from '../cards/CardNames';
import { Tags } from '../card/Tags';
import { GlobalParameter, GlobalParamChange } from '..';

export default class CardBuilder {
  private _id!: string;
  private _name: string;
  private _cost?: number;
  private _tags: Array<Tags> = [];
  private _globalReq?: GlobalRequirement;
  private _victoryPoints?: number;
  private _production: Array<ProductionAmount> = [];
  private _globalParameters?: Array<GlobalParamChange>;

  constructor(name: CardNames) {
    this._name = name;
    return this;
  }

  addGlobalRequirement(req: GlobalRequirement) {
    this._globalReq = req;
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

  addProduction(production: ProductionAmount | Array<ProductionAmount>) {
    if (Array.isArray(production)) {
      this._production = [...this._production, ...production];
    } else {
      this._production = [...this._production, production];
    }
  }

  build(): Card {
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

export type GlobalRequirement = {
  min: boolean;
  amount: number;
  type: GlobalParameter;
};
