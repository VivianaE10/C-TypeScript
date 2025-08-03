function saludar(nombre, saludo) {
    if (saludo) {
        return "".concat(saludo, ", ").concat(nombre, "!");
    }
    else {
        return "hola, ".concat(nombre, "!");
    }
}
console.log(saludar("vivi"));
console.log(saludar("vivi", "bunos dias"));
// ? parametros opcionales si el saludo esta o no esta
//////////////////////////parametro multiples ...
function sumarTodos() {
    var numeros = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numeros[_i] = arguments[_i];
    }
    return numeros.reduce(function (acumulado, actual) { return acumulado + actual; }, 0);
}
console.log("resultados de sumar todos", sumarTodos(1, 2, 3, 4, 5));
//////////////////////////valores ´por defecto
function despedir(nombre, despedida) {
    if (despedida === void 0) { despedida = "adios"; }
    return "".concat(despedida, ", ").concat(nombre, "!");
}
console.log(despedir("vivi"));
console.log(despedir("vivi", "bye bye"));
