function regresar<T>(args: T) {
  return args;
}

console.log(regresar("hello"));
console.log(regresar(1));
console.log(regresar(1.4));

type Heroe_1 = {
  nombre: string;
};

type Villano_1 = {
  maldad: string;
};

let deadpool = {
  nombre: "Deadpool",
  maldad: "mucha",
};

function funcionGenerica<T>(args: T) {
  return args;
}
console.log(funcionGenerica<Heroe_1>(deadpool).nombre);
console.log(funcionGenerica<Villano_1>(deadpool).maldad);

class Cuadrado<T extends string | number> {
  base: T;
  altura: T;
  area(): number {
    return +this.base * +this.altura;
  }
  constructor(base: T, altura: T) {
    this.base = base;
    this.altura = altura;
  }
}
let cuadrado = new Cuadrado<number>(3, 2);
console.log(cuadrado.area());

let cuadrado2 = new Cuadrado<number | string>("3", 3);
console.log(cuadrado2.area());
