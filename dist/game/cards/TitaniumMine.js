"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Resource_1 = require("../Resource");
var TitaniumMine = /** @class */ (function () {
    function TitaniumMine() {
        this.name = 'Titanium Mine';
        this.cost = 7;
    }
    TitaniumMine.prototype.play = function (game, player) {
        player.pay(Resource_1.BasicResource.MEGACREDITS, -this.cost);
        player.adjustTitaniumProduction(1);
        return game;
    };
    return TitaniumMine;
}());
exports.default = TitaniumMine;
