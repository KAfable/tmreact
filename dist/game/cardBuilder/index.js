var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
import Card from '../card';
var CardBuilder = (function () {
    function CardBuilder(name) {
        this._tags = [];
        this._name = name;
        return this;
    }
    CardBuilder.prototype.addGlobalRequirement = function (req) {
        this._globalReq = req;
        return this;
    };
    CardBuilder.prototype.addTags = function (tags) {
        if (Array.isArray(tags)) {
            this._tags = __spreadArrays(this._tags, tags);
        }
        else {
            this._tags = __spreadArrays(this._tags, [tags]);
        }
        return this;
    };
    CardBuilder.prototype.addVictoryPoints = function (points) {
        this._victoryPoints = points;
        return this;
    };
    CardBuilder.prototype.build = function () {
        return new Card(this);
    };
    CardBuilder.prototype.isProject = function (cost) {
        return this;
    };
    CardBuilder.prototype.setID = function (input) {
        this._id = input;
        return this;
    };
    Object.defineProperty(CardBuilder.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CardBuilder.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CardBuilder.prototype, "cost", {
        get: function () {
            return this._cost;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CardBuilder.prototype, "tags", {
        get: function () {
            return this._tags;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CardBuilder.prototype, "globalReq", {
        get: function () {
            return this._globalReq;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CardBuilder.prototype, "victoryPoints", {
        get: function () {
            return this._victoryPoints;
        },
        enumerable: false,
        configurable: true
    });
    return CardBuilder;
}());
export default CardBuilder;
//# sourceMappingURL=index.js.map