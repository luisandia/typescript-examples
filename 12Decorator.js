"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function consola(constructor) {
    console.log(constructor);
}
function isWritable(isEditable) {
    return function (target, propertyKey, descriptor) {
        descriptor.writable = isEditable;
    };
}
function planVillano(constructor) {
    constructor.prototype.imprimirPlan = function () {
        console.log("el plan de " + this.nombre + " es dominar el mundo");
    };
}
function imprimible(constructor) {
    constructor.prototype.imprimir = function () {
        console.log(this);
    };
}
function parametro(target, metodo, index) {
    console.log("parameter ", target, metodo, index);
}
// @consola
var Vill = /** @class */ (function () {
    function Vill(nombre) {
        this.nombre = nombre;
    }
    Vill.prototype.func = function () {
        console.log("nadie me puede sobreescribir");
    };
    Vill.prototype.task = function (pt1) {
        console.log("you writed ", pt1);
    };
    __decorate([
        isWritable(true)
    ], Vill.prototype, "func", null);
    __decorate([
        __param(0, parametro)
    ], Vill.prototype, "task", null);
    Vill = __decorate([
        imprimible,
        planVillano
    ], Vill);
    return Vill;
}());
var lex = new Vill("Lex luthor");
lex.func = function () {
    console.log("Te sobreescribi");
};
lex.imprimir();
lex.imprimirPlan();
lex.func();
lex.task("pt1");
