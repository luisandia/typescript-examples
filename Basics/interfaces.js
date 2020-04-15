"use strict";
function sendMission(heroe) {
    console.log(heroe.nombre);
    heroe.regenerate(heroe.nombre);
}
var wolverine = {
    nombre: "wolverine",
    poder: "garras",
    regenerate: function (name) { return console.log(name + " regenerated"); },
};
sendMission(wolverine);
var Heroe_2 = /** @class */ (function () {
    function Heroe_2(nombre, otraPropiedad) {
        this.regenerate = function (name) { return console.log("regenerate ", name); };
        this.nombre = nombre;
        this.otraPropiedad = otraPropiedad;
    }
    return Heroe_2;
}());
