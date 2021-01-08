type SomeType = string;
type myConditionalType = SomeType extends string ? string : null;

function someFunction<T>(value: T) {
  type A = T extends boolean
    ? "TYPE A"
    : T extends string
    ? "TYPE B"
    : T extends number
    ? "TYPE C"
    : "TYPE C";
  const someOtherFunction = (
    someArgs: T extends boolean ? "TYPE A" : "TYPE B"
  ) => {
    const a: "TYPE A" | "TYPE B" = someArgs;
  };
  return someOtherFunction;
}

const result = someFunction("");

type StringOrNot<T> = T extends string ? string : never;

type AUnion = string | number | never;

/*
a extends a ? never:a=>never
b extends a ? never:a=>b
c extends a ? never:a=>c
*/
type ResultType = Exclude<"a" | "b" | "c", "a">;

type MyType<T> = (() => T) extends () => string | number ? T : never;
// get never
type MyResult = MyType<string | number | boolean>;
// get string|number
type MyResult2 = MyType<string | number>;

type InferSomething<T> = T extends infer U ? U : any;

type Inferred = InferSomething<"my string">;

type InferSomething2<T> = T extends { a: infer A; b: infer B } ? A & B : any;
// ger any
type Inferred2 = InferSomething2<{ a: "hello" }>;
// ger {}
type Inferred3 = InferSomething2<{ a: { a: "hello" }; b: { b: 5 } }>;

type MyFuncReturnValue = ReturnType<()=>true>

