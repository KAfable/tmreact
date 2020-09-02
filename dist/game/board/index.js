import Player from '../Player';
import { BasicResource } from '../Resource';
var Board = (function () {
    function Board(grid) {
        this.grid = [];
        this.oxygen = 0;
        this.temperature = -30;
        this.oceanCount = 0;
        this.grid = grid;
    }
    Board.prototype.getTemperature = function () {
        return this.temperature;
    };
    Board.prototype.getOxygen = function () {
        return this.oxygen;
    };
    Board.prototype.getOceanCount = function () {
        return this.oceanCount;
    };
    Board.prototype.getNeighbors = function (target) {
        return this.grid;
    };
    Board.prototype.doPlacementBonus = function (target, tile, player) {
        for (var resource in target.bonus) {
            player.receive(resource, target.bonus[resource] || 0);
            if (Player.name === 'Mining Guild' &&
                (resource === BasicResource.STEEL ||
                    resource === BasicResource.TITANIUM)) {
            }
        }
    };
    Board.prototype.placeOcean = function (player) { };
    Board.prototype.placeGreenery = function (player) { };
    return Board;
}());
export default Board;
export var GlobalParameter;
(function (GlobalParameter) {
    GlobalParameter["OXYGEN"] = "oxygen";
    GlobalParameter["TEMP"] = "temperature";
    GlobalParameter["OCEAN_COUNT"] = "ocean count";
    GlobalParameter["VENUS"] = "venus";
})(GlobalParameter || (GlobalParameter = {}));
//# sourceMappingURL=index.js.map