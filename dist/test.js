"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Player_1 = __importDefault(require("./game/Player"));
var Game_1 = __importDefault(require("./game/Game"));
var TitaniumMine_1 = __importDefault(require("./game/cards/TitaniumMine"));
var Resource_1 = require("./game/Resource");
var bob = new Player_1.default();
var bill = new Player_1.default();
var game = new Game_1.default([bob, bill]);
console.log(bob.getResource(Resource_1.BasicResource.STEEL));
bill.adjustSteelProduction(5);
var mine = new TitaniumMine_1.default();
console.log(mine.play(game, bob));
console.log(bob.getResource(Resource_1.BasicResource.TITANIUM));
bob.pay(Resource_1.BasicResource.MEGACREDITS, -7);
console.log(mine.play(game, bob));
