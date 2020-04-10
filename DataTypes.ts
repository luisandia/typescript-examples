// BOOLEAN
let esSuperman: boolean = true;
let esBatman: boolean;
let esAcuaman: Boolean = true;

//NUMBERS
let avengers: number = 5;
let villanos: number;
let otros = 3;

//STRING
let batman: string = "Batman";
let volcanNegro: string = `volcan negro`;

//ANY, by default all is any if you dont declare the type of variable
let vengador: any;
let existe;
let derrotas;

vengador = "Dr strange";

//ARRAYS, it can has only one type of data
let arreglo: number[] = [1, 2, 3, 4, 5];
let villanos_array: string[] = ["omega rojo", "duende verde"];

//TUPLE, it can has different types of data

let heroe: [string, number, boolean] = ["Superman", 1, true];
let heroeArray: [string, number, boolean][] = [["Superman", 1, true]];
heroeArray.push(["thor", 2, true]);

//ENUM
enum volumen {
  min = 1,
  medio = 5,
  max = 10,
  mean = "mean",
}
console.log(volumen.min);

//VOID, opossite to any.
function llamar(): void {
  console.log("hello");
  //return 1;
}
llamar();

//NEVER, never is the return type for a function expression or an arrow function
//expression that always throws an exception or one that never returns;
function error(message: string): never {
  throw new Error(message);
}
//error("something happend")

//ASSERTION, (<data type>variable)
let valor: any = "cualquier cosa";
let size: number = (<string>valor).length;

// undefined and null,By default null and undefined are subtypes of all other types. That
//means you can assign null and undefined to something like number.
let nada: undefined = undefined;
nada = null;

let num:number =null;



