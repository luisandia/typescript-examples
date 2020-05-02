class Avenger {
  nombre: string = "sin nombre";
  equipo: string;
  protected power: string = "none";
  private age: number;
  constructor(nombre: string, equipo: string = "ninguno") {
    this.nombre = nombre;
    this.equipo = equipo;
    this.age = 10;
  }
  public getAge(): number {
    return this.age;
  }
}

let heroe_1: Avenger = new Avenger("Thor", "america");

console.log(heroe_1.equipo);

class Base {
  constructor(public nombre: string, private alias: string) {}
  protected getAlias(): string {
    return this.alias;
  }
}
let obj = new Base("ciclope", "scott");

class Child extends Base {
  private _power: string = "none";
  constructor(a: string, b: string) {
    super(a, b);
  }
  getNombre = () => {
    return this.nombre;
  };
  get power(): string {
    return this._power;
  }
  set power(power: string) {
    this._power = power;
  }
}
let obj1 = new Child("magneto", "none");
console.log(obj1.getNombre());

class ClaseStatic {
  static nombre: string = "claser static";
}
console.log(ClaseStatic.nombre);

// cant be instanstiated, useful as base class to inherance
abstract class claseAbstracta {
  constructor(public nombre: string, private alias: string) {}
  abstract hello(): void;
}

class Wolv extends claseAbstracta {
  hello(): void {
    console.log("hello");
  }
}

let wo = new Wolv("wolverine", "none");
console.log(wo.nombre);

// SINGLETON

class Apocalipsis {
  static instance: Apocalipsis;
  private constructor(public nombre: string) {}
  static callApocalipsis() {
    if (!Apocalipsis.instance) {
      Apocalipsis.instance = new Apocalipsis("I am the only one");
    }
    return Apocalipsis.instance;
  }
}

console.log(Apocalipsis.callApocalipsis())
