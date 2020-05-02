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
var testAvailable;
var testExtract;
// let a:T0=null // cannot be null
var update = function (id, starship) { };
update(1, { name: "uno" });
var starShip = {
    Explorer1: {
        name: "explorer1",
        enable: true,
    },
    Explorer2: {
        name: "explorer1",
        enable: true,
    },
};
function hello(a) {
    return {
        b: "a",
        c: 1,
    };
}
function Deletable(Base) {
    return /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.deleted = false;
            return _this;
        }
        class_1.prototype.delete = function () { };
        return class_1;
    }(Base));
}
var Car = /** @class */ (function () {
    function Car(name) {
        this.name = name;
    }
    return Car;
}());
var Truck = /** @class */ (function () {
    function Truck(name) {
        this.name = name;
    }
    return Truck;
}());
var DeletableCar = Deletable(Car);
var DeletableTruck = Deletable(Truck);
var Profile = /** @class */ (function () {
    function Profile() {
    }
    return Profile;
}());
var myProfile = new Profile();
myProfile.myUser = new DeletableCar("hh");
var myObject = {
    sayHello: function () {
        return this.helloWorld();
    },
};
myObject.sayHello = myObject.sayHello.bind({
    helloWorld: function () {
        return "helloWorld";
    },
});
myObject.sayHello();
