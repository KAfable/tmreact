var MAX_OXYGEN = 14;
var MAX_TEMPERATURE = 8;
var STARTING_TEMP = -30;
var STARTING_OXYGEN = 0;
var Game = (function () {
    function Game(players) {
        this.players = [];
        this.deck = [];
        this.discard = [];
        this.oxygen = STARTING_OXYGEN;
        this.temperature = STARTING_TEMP;
        this.players = players;
    }
    Game.prototype.increaseOxygen = function () {
        if (this.oxygen < MAX_OXYGEN)
            this.oxygen++;
    };
    Game.prototype.getOxygen = function () {
        return this.oxygen;
    };
    Game.prototype.increaseTemperature = function () {
        if (this.temperature < MAX_TEMPERATURE)
            this.oxygen += 2;
    };
    Game.prototype.getTemperature = function () {
        return this.temperature;
    };
    return Game;
}());
export default Game;
//# sourceMappingURL=Game.js.map