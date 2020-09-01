import Player from '../Player';
import { BasicResource } from '../Resource';
var Board = (function () {
    function Board(grid) {
        this.grid = [];
        this.grid = grid;
    }
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
//# sourceMappingURL=index.js.map