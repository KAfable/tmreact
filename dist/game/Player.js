var Player = (function () {
    function Player(name, corp) {
        this.name = '';
        this.megacredits = 0;
        this.megacreditProduction = 0;
        this.steel = 0;
        this.steelProduction = 0;
        this.steelValue = 2;
        this.titanium = 0;
        this.titaniumProduction = 0;
        this.titaniumValue = 3;
        this.plants = 0;
        this.plantProduction = 0;
        this.greeneryPlantCost = 8;
        this.energy = 0;
        this.energyProduction = 0;
        this.heat = 0;
        this.heatProduction = 0;
        this.corporation = undefined;
        this.corporation = corp;
        this.name = name;
    }
    Player.prototype.getResource = function (resource) {
        if (typeof this[resource] === 'number')
            return this[resource];
        throw new Error("Resource " + resource + " is not a valid resource.");
    };
    Player.prototype.getProduction = function () {
        return this.megacreditProduction;
    };
    Player.prototype.pay = function (resource, amount) {
        if (this.getResource(resource) < amount) {
            return false;
        }
        this[resource] -= amount;
        return true;
    };
    Player.prototype.receive = function (resource, amount) {
        this[resource] += amount;
    };
    Player.prototype.adjustMegaCreditProduction = function (amount) {
        this.megacreditProduction += amount;
    };
    Player.prototype.adjustSteelProduction = function (amount) {
        if (this.steelProduction + amount < 0) {
            return false;
        }
        this.steelProduction += amount;
        return true;
    };
    Player.prototype.adjustTitaniumProduction = function (amount) {
        if (this.titaniumProduction + amount < 0) {
            return false;
        }
        this.titaniumProduction += amount;
        return true;
    };
    Player.prototype.adjustPlantsProduction = function (amount) {
        if (this.plantProduction + amount < 0) {
            return false;
        }
        this.plantProduction += amount;
        return true;
    };
    Player.prototype.adjustEnergyProduction = function (amount) {
        if (this.energyProduction + amount < 0) {
            return false;
        }
        this.energyProduction += amount;
        return true;
    };
    Player.prototype.adjustHeatProduction = function (amount) {
        if (this.heatProduction + amount < 0) {
            return false;
        }
        this.heatProduction += amount;
        return true;
    };
    return Player;
}());
export default Player;
//# sourceMappingURL=Player.js.map