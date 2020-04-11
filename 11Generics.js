"use strict";
function regresar(args) {
    return args;
}
console.log(regresar("hello"));
console.log(regresar(1));
console.log(regresar(1.4));
var deadpool = {
    nombre: "Deadpool",
    maldad: "mucha",
};
function funcionGenerica(args) {
    return args;
}
console.log(funcionGenerica(deadpool).nombre);
console.log(funcionGenerica(deadpool).maldad);
var Cuadrado = /** @class */ (function () {
    function Cuadrado(base, altura) {
        this.base = base;
        this.altura = altura;
    }
    Cuadrado.prototype.area = function () {
        return +this.base * +this.altura;
    };
    return Cuadrado;
}());
var cuadrado = new Cuadrado(3, 2);
console.log(cuadrado.area());
var cuadrado2 = new Cuadrado("3", 3);
console.log(cuadrado2.area());
