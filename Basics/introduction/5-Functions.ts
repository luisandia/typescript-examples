let hero: string;

function imprime_heroe(): string {
  return hero;
}
console.log(imprime_heroe());

// parameters, ? optional

function nombres(
  nombre: string,
  apellido?: string,
  capitalizado: boolean = true
): string {
  return `${nombre} ${apellido}`;
}

// rest parameter

function myfunc(nombre: string, ...rest: string[]) {
  return nombre + rest.join(" ");
}
myfunc("luis", "a", "b", "c ");

function sumar(a: number, b: number): number {
  return a + b;
}
// tipo function
let myf:(a: number, b: number) => number;

myf = sumar;

