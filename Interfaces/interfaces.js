var persona = {
    nombre: "vivi",
    edad: 36,
    esDesarrollador: true,
};
console.log("persona:", persona);
//////////// arreglo de tipo interface
var personas = [
    { nombre: "luzda", edad: 45, esDesarrollador: true },
    { nombre: "jorge", edad: 35, esDesarrollador: false },
    { nombre: "monica", edad: 47, esDesarrollador: true },
];
console.log("personas", personas);
var sumar = function (a, b) {
    return a + b;
};
console.log("rescultado de suma", sumar(12, 3));
