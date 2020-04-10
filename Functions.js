var hero;
function imprime_heroe() {
    return hero;
}
console.log(imprime_heroe());
// parameters, ? optional
function nombres(nombre, apellido, capitalizado) {
    if (capitalizado === void 0) { capitalizado = true; }
    return nombre + " " + apellido;
}
// rest parameter
function myfunc(nombre) {
    var rest = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        rest[_i - 1] = arguments[_i];
    }
    return nombre + rest.join(" ");
}
myfunc("luis", "a", "b", "c ");
function sumar(a, b) {
    return a + b;
}
// tipo function
var myf;
myf = sumar;
