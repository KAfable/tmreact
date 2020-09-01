import { BasicResource } from '../Resource';
var Area = (function () {
    function Area(x, y, type, bonus, name) {
        if (type === void 0) { type = AreaType.NORMAL; }
        this.bonus = bonus;
        this.type = type;
        this.x = x;
        this.y = y;
        this.highlighted = false;
        this.name = name;
        this.id = this.name || "" + type + x + y;
    }
    return Area;
}());
export default Area;
export var AreaType;
(function (AreaType) {
    AreaType[AreaType["NORMAL"] = 0] = "NORMAL";
    AreaType[AreaType["OCEAN"] = 1] = "OCEAN";
    AreaType[AreaType["CITY"] = 2] = "CITY";
    AreaType[AreaType["LAVA"] = 3] = "LAVA";
    AreaType[AreaType["PHOBOS"] = 4] = "PHOBOS";
    AreaType[AreaType["GANYMEDE"] = 5] = "GANYMEDE";
})(AreaType || (AreaType = {}));
export var AreaName;
(function (AreaName) {
    AreaName["ganymede"] = "Ganymede Colony";
    AreaName["phobos"] = "Phobos Space Haven";
    AreaName["ascraeus"] = "Ascraeus Mons";
    AreaName["pavonis"] = "Pavonis Mons";
    AreaName["tharsis"] = "Tharsis Tholis";
    AreaName["noctis"] = "Noctis City";
    AreaName["arsia"] = "Arsia Mons";
})(AreaName || (AreaName = {}));
//# sourceMappingURL=Area.js.map