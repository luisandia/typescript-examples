// BOOLEAN
var esSuperman = true;
var esBatman;
var esAcuaman = true;
//NUMBERS
var avengers = 5;
var villanos;
var otros = 3;
//STRING
var batman = "Batman";
var volcanNegro = "volcan negro";
//ANY, by default all is any if you dont declare the type of variable
var vengador;
var existe;
var derrotas;
vengador = "Dr strange";
//ARRAYS, it can has only one type of data
var arreglo = [1, 2, 3, 4, 5];
var villanos_array = ["omega rojo", "duende verde"];
//TUPLE, it can has different types of data
var heroe = ["Superman", 1, true];
var heroeArray = [["Superman", 1, true]];
heroeArray.push(["thor", 2, true]);
//ENUM
var volumen;
(function (volumen) {
    volumen[volumen["min"] = 1] = "min";
    volumen[volumen["medio"] = 5] = "medio";
    volumen[volumen["max"] = 10] = "max";
    volumen["mean"] = "mean";
})(volumen || (volumen = {}));
console.log(volumen.min);
//VOID, opossite to any.
function llamar() {
    console.log("hello");
    //return 1;
}
llamar();
//NEVER, never is the return type for a function expression or an arrow function
//expression that always throws an exception or one that never returns;
function error(message) {
    throw new Error(message);
}
//error("something happend")
//ASSERTION, (<data type>variable)
var valor = "cualquier cosa";
var size = valor.length;
// undefined and null,By default null and undefined are subtypes of all other types. That
//means you can assign null and undefined to something like number.
var nada = undefined;
nada = null;
var num = null;
