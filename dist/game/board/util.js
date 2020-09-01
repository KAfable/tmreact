var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
import Area, { AreaType, AreaName } from './Area';
var NORMAL = AreaType.NORMAL, OCEAN = AreaType.OCEAN, CITY = AreaType.CITY, LAVA = AreaType.LAVA;
var tharsis = AreaName.tharsis, ascraeus = AreaName.ascraeus, pavonis = AreaName.pavonis, arsia = AreaName.arsia, noctis = AreaName.noctis;
export var BoardVariants;
(function (BoardVariants) {
    BoardVariants["VANILLA"] = "Vanilla";
    BoardVariants["ELYSIUM"] = "Elysium";
    BoardVariants["HELLAS"] = "Hellas";
    BoardVariants["RANDOM"] = "Random";
})(BoardVariants || (BoardVariants = {}));
export function generateVanilla() {
    var row1 = [
        new Area(1, 1, NORMAL, { steel: 2 }),
        new Area(2, 1, OCEAN, { steel: 2 }),
        new Area(3, 1, NORMAL),
        new Area(4, 1, OCEAN, { cards: 1 }),
        new Area(5, 1, OCEAN),
    ];
    var row2 = [
        new Area(1, 2),
        new Area(2, 2, LAVA, { steel: 1 }, tharsis),
        new Area(3, 2),
        new Area(4, 2),
        new Area(5, 2),
        new Area(6, 2, OCEAN, { cards: 2 }),
    ];
    var row3 = [
        new Area(1, 3, LAVA, undefined, ascraeus),
        new Area(2, 3),
        new Area(3, 3),
        new Area(4, 3),
        new Area(5, 3),
        new Area(6, 3),
        new Area(7, 3, NORMAL, { steel: 1 }),
    ];
    var row4 = [
        new Area(1, 4, LAVA, { plants: 1, titanium: 1 }, pavonis),
        new Area(2, 4, NORMAL, { plants: 1 }),
        new Area(3, 4, NORMAL, { plants: 1 }),
        new Area(4, 4, NORMAL, { plants: 1 }),
        new Area(5, 4, NORMAL, { plants: 2 }),
        new Area(6, 4, NORMAL, { plants: 1 }),
        new Area(7, 4, NORMAL, { plants: 1 }),
        new Area(8, 4, OCEAN, { plants: 2 }),
    ];
    var row5 = [
        new Area(1, 5, LAVA, { plants: 2 }, arsia),
        new Area(2, 5, NORMAL, { plants: 2 }),
        new Area(3, 5, CITY, { plants: 2 }, noctis),
        new Area(4, 5, OCEAN, { plants: 2 }),
        new Area(5, 5, OCEAN, { plants: 2 }),
        new Area(6, 5, OCEAN, { plants: 2 }),
        new Area(7, 5, NORMAL, { plants: 2 }),
        new Area(8, 5, NORMAL, { plants: 2 }),
        new Area(9, 5, NORMAL, { plants: 2 }),
    ];
    var row6 = [
        new Area(1, 6, NORMAL, { plants: 1 }),
        new Area(2, 6, NORMAL, { plants: 2 }),
        new Area(3, 6, NORMAL, { plants: 1 }),
        new Area(4, 6, NORMAL, { plants: 1 }),
        new Area(5, 6, NORMAL, { plants: 1 }),
        new Area(6, 6, OCEAN, { plants: 1 }),
        new Area(7, 6, OCEAN, { plants: 1 }),
        new Area(8, 6, OCEAN, { plants: 1 }),
    ];
    var row7 = [
        new Area(1, 7),
        new Area(2, 7),
        new Area(3, 7),
        new Area(4, 7),
        new Area(5, 7),
        new Area(6, 7, NORMAL, { plants: 1 }),
        new Area(7, 7),
    ];
    var row8 = [
        new Area(1, 8, NORMAL, { steel: 2 }),
        new Area(2, 8),
        new Area(3, 8),
        new Area(4, 8),
        new Area(5, 8),
        new Area(6, 8, NORMAL, { titanium: 1 }),
    ];
    var row9 = [
        new Area(1, 9, NORMAL, { steel: 1 }),
        new Area(2, 9, NORMAL, { steel: 2 }),
        new Area(3, 9),
        new Area(4, 9),
        new Area(5, 9, OCEAN, { titanium: 2 }),
    ];
    return __spreadArrays(row1, row2, row3, row4, row5, row6, row7, row8, row9);
}
//# sourceMappingURL=util.js.map