var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Tile = (function () {
    function Tile() {
    }
    return Tile;
}());
export { Tile };
var Ocean = (function (_super) {
    __extends(Ocean, _super);
    function Ocean() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.owner = undefined;
        return _this;
    }
    Ocean.prototype.canBePlaced = function (grid) {
        return true;
    };
    return Ocean;
}(Tile));
export { Ocean };
//# sourceMappingURL=Tiles.js.map