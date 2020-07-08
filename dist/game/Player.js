"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Player = /** @class */ (function () {
    function Player() {
        this.megacredits = 0;
        this.megacreditProduction = 0;
        this.steel = 0;
        this.steelProduction = 0;
        this.steelValue = 2; // Advanced Alloys
        this.titanium = 0;
        this.titaniumProduction = 0;
        this.titaniumValue = 3; // Advanced Alloys
        this.plants = 0;
        this.plantProduction = 0;
        this.greeneryPlantCost = 8; // Ecoline
        this.energy = 0;
        this.energyProduction = 0;
        this.heat = 0;
        this.heatProduction = 0;
        this.hand = [];
    }
    Player.prototype.getResource = function (resource) {
        if (this[resource])
            return this[resource];
        throw new Error("Resource " + resource + " is not a valid resource.");
    };
    Player.prototype.pay = function (resource, amount) {
        if (this.getResource(resource) - amount < 0) {
            return false;
        }
        this[resource] -= amount;
        return true;
    };
    // public adjustMegaCredits(amount: number): boolean {
    //   // check if legal move
    //   if (this.megaCredits + amount < 0) {
    //     return false;
    //   }
    //   this.megaCredits += amount;
    //   return true;
    // }
    Player.prototype.adjustMegaCreditProduction = function (amount) {
        // MCProduction can go negative
        this.megacreditProduction += amount;
    };
    // public adjustSteel(amount: number): boolean {
    //   if (this.steel + amount < 0) {
    //     return false;
    //   }
    //   this.steel += amount;
    //   return true;
    // }
    Player.prototype.adjustSteelProduction = function (amount) {
        if (this.steelProduction + amount < 0) {
            return false;
        }
        this.steelProduction += amount;
        return true;
    };
    // public adjustTitanium(amount: number): boolean {
    //   // check if legal move
    //   if (this.titanium + amount < 0) {
    //     return false;
    //   }
    //   this.titanium += amount;
    //   return true;
    // }
    Player.prototype.adjustTitaniumProduction = function (amount) {
        if (this.titaniumProduction + amount < 0) {
            return false;
        }
        this.titaniumProduction += amount;
        return true;
    };
    // public adjustPlants(amount: number): boolean {
    //   // check if legal move
    //   if (this.plants + amount < 0) {
    //     return false;
    //   }
    //   this.plants += amount;
    //   return true;
    // }
    Player.prototype.adjustPlantsProduction = function (amount) {
        if (this.plantProduction + amount < 0) {
            return false;
        }
        this.plantProduction += amount;
        return true;
    };
    // public adjustEnergy(amount: number): boolean {
    //   // check if legal move
    //   if (this.energy + amount < 0) {
    //     return false;
    //   }
    //   this.energy += amount;
    //   return true;
    // }
    Player.prototype.adjustEnergyProduction = function (amount) {
        if (this.energyProduction + amount < 0) {
            return false;
        }
        this.energyProduction += amount;
        return true;
    };
    // public adjustHeat(amount: number): boolean {
    //   // check if legal move
    //   if (this.heat + amount < 0) {
    //     return false;
    //   }
    //   this.heat += amount;
    //   return true;
    // }
    Player.prototype.adjustHeatProduction = function (amount) {
        if (this.heatProduction + amount < 0) {
            return false;
        }
        this.heatProduction += amount;
        return true;
    };
    return Player;
}());
exports.default = Player;
