function consola(constructor: Function) {
  console.log(constructor);
}

function isWritable(isEditable: boolean) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    descriptor.writable = isEditable;
  };
}

function planVillano(constructor: Function) {
  constructor.prototype.imprimirPlan = function () {
    console.log(`el plan de ${this.nombre} es dominar el mundo`);
  };
}

function imprimible(constructor: Function) {
  constructor.prototype.imprimir = function () {
    console.log(this);
  };
}

function parametro(target: any, metodo: string, index: number) {
  console.log("parameter ", target, metodo, index);
}

// @consola
@imprimible
@planVillano
class Vill {
  constructor(public nombre: string) {}
  @isWritable(true)
  func() {
    console.log("nadie me puede sobreescribir");
  }
  task(@parametro pt1: string) {
    console.log("you writed ", pt1);
  }
}

let lex = new Vill("Lex luthor");
lex.func = function () {
  console.log("Te sobreescribi");
};
(<any>lex).imprimir();
(<any>lex).imprimirPlan();

lex.func();
lex.task("pt1");
