System.register([], function (exports_1, context_1) {
    "use strict";
    var esSuperman, esBatman, esAcuaman, avengers, villanos, otros, batman, volcanNegro, vengador, existe, derrotas, arreglo, villanos_array, heroe, heroeArray, volumen, valor, size, PI;
    var __moduleName = context_1 && context_1.id;
    //VOID, opossite to any.
    function llamar() {
        console.log("hello");
        //return 1;
    }
    //NEVER, never is the return type for a function expression or an arrow function
    //expression that always throws an exception or one that never returns;
    function error(message) {
        throw new Error(message);
    }
    return {
        setters: [],
        execute: function () {
            // BOOLEAN
            esSuperman = true;
            esAcuaman = true;
            //NUMBERS
            avengers = 5;
            otros = 3;
            //STRING
            batman = "Batman";
            volcanNegro = "volcan negro";
            vengador = "Dr strange";
            //ARRAYS, it can has only one type of data
            arreglo = [1, 2, 3, 4, 5];
            villanos_array = ["omega rojo", "duende verde"];
            //TUPLE, it can has different types of data
            heroe = ["Superman", 1, true];
            heroeArray = [["Superman", 1, true]];
            heroeArray.push(["thor", 2, true]);
            //ENUM
            (function (volumen) {
                volumen[volumen["min"] = 1] = "min";
                volumen[volumen["medio"] = 5] = "medio";
                volumen[volumen["max"] = 10] = "max";
                volumen["mean"] = "mean";
            })(volumen || (volumen = {}));
            console.log(volumen.min);
            llamar();
            //error("something happend")
            //ASSERTION, (<data type>variable)
            valor = "cualquier cosa";
            size = valor.length;
            // undefined and null,By default null and undefined are subtypes of all other types. That
            //means you can assign null and undefined to something like number.
            // let nada: undefined = undefined;
            // nada = null;
            // let num:number =null;
            exports_1("PI", PI = 1.14156);
        }
    };
});
