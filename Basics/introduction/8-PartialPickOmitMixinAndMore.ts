interface StartShip {
  name: string;
  enable: boolean;
}

type StarshipNameOnly = Pick<StartShip, "name">;
type StarshipOmitName = Omit<StartShip, "name">;
type Available = "coffe" | "orange" | "tea";
let testAvailable: Exclude<Available, "orange">;
let testExtract: Extract<Available, "a" | "b" | "tea">;

type T0 = NonNullable<string | number | undefined>; // string | number
type T1 = NonNullable<string[] | null | undefined>; // string[]
// let a:T0=null // cannot be null

const update = (id: number, starship: Partial<StartShip>) => {};

update(1, { name: "uno" });

const starShip: Record<string, StartShip> = {
  Explorer1: {
    name: "explorer1",
    enable: true,
  },
  Explorer2: {
    name: "explorer1",
    enable: true,
  },
};

function myHelloFunc(a: number): { b: string; c: number } {
  return {
    b: "a",
    c: 1,
  };
}
type Myhello = ReturnType<typeof myHelloFunc>;

// --------------- mixin

type Constructable<ClassInstance> = new (...args: any[]) => ClassInstance;

function Deletable<B extends Constructable<{}>>(Base: B) {
  return class extends Base {
    deleted: boolean = false;
    delete() {}
  };
}
class Car {
  constructor(public name: string) {}
}
class Truck {
  constructor(public name: string) {}
}

const DeletableCar = Deletable(Car);
const DeletableTruck = Deletable(Truck);

type DeletableUserCar = InstanceType<typeof DeletableCar>;
class Profile {
  myUser!: DeletableUserCar;
}

const myProfile = new Profile();
myProfile.myUser = new DeletableCar("hh");

//  ----------------------------

interface MyObject {
  sayHello(): void;
}

interface MyObjectThis {
  helloWorld(): string;
}
// use this of MyObjectThis interface
const myObject: MyObject & ThisType<MyObjectThis> = {
  sayHello() {
    return this.helloWorld();
  },
};

myObject.sayHello = myObject.sayHello.bind({
  helloWorld() {
    return "helloWorld";
  },
});

myObject.sayHello();
