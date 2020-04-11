"use strict";
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
var Avenger = /** @class */ (function () {
    function Avenger(nombre, equipo) {
        if (equipo === void 0) { equipo = "ninguno"; }
        this.nombre = "sin nombre";
        this.power = "none";
        this.nombre = nombre;
        this.equipo = equipo;
        this.age = 10;
    }
    Avenger.prototype.getAge = function () {
        return this.age;
    };
    return Avenger;
}());
var heroe_1 = new Avenger("Thor", "america");
console.log(heroe_1.equipo);
var Base = /** @class */ (function () {
    function Base(nombre, alias) {
        this.nombre = nombre;
        this.alias = alias;
    }
    Base.prototype.getAlias = function () {
        return this.alias;
    };
    return Base;
}());
var obj = new Base("ciclope", "scott");
var Child = /** @class */ (function (_super) {
    __extends(Child, _super);
    function Child(a, b) {
        var _this = _super.call(this, a, b) || this;
        _this._power = "none";
        _this.getNombre = function () {
            return _this.nombre;
        };
        return _this;
    }
    Object.defineProperty(Child.prototype, "power", {
        get: function () {
            return this._power;
        },
        set: function (power) {
            this._power = power;
        },
        enumerable: true,
        configurable: true
    });
    return Child;
}(Base));
var obj1 = new Child("magneto", "none");
console.log(obj1.getNombre());
var ClaseStatic = /** @class */ (function () {
    function ClaseStatic() {
    }
    ClaseStatic.nombre = "claser static";
    return ClaseStatic;
}());
console.log(ClaseStatic.nombre);
// cant be instanstiated, useful as base class to inherance
var claseAbstracta = /** @class */ (function () {
    function claseAbstracta(nombre, alias) {
        this.nombre = nombre;
        this.alias = alias;
    }
    return claseAbstracta;
}());
var Wolv = /** @class */ (function (_super) {
    __extends(Wolv, _super);
    function Wolv() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Wolv.prototype.hello = function () {
        console.log("hello");
    };
    return Wolv;
}(claseAbstracta));
var wo = new Wolv("wolverine", "none");
console.log(wo.nombre);
// SINGLETON
var Apocalipsis = /** @class */ (function () {
    function Apocalipsis(nombre) {
        this.nombre = nombre;
    }
    Apocalipsis.callApocalipsis = function () {
        if (!Apocalipsis.instance) {
            Apocalipsis.instance = new Apocalipsis("I am the only one");
        }
        return Apocalipsis.instance;
    };
    return Apocalipsis;
}());
console.log(Apocalipsis.callApocalipsis());
