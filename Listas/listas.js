//*******Colecciones de datos
var nombres = ["vivi", "marce", "jaco"];
console.log("Nombres: ", nombres);
var edades = [40, 20, 12];
console.log("Edades", edades);
////////////////////////////////////////////////////////////////////////////////////////////////
//***areglos tipo any(mixtos reciben cualquier tipo de valor)
var mixto = ["vivi", 32, true];
console.log("Mixto:", mixto);
var personas = [
    { nombre: "luzda", edad: 45, esDesarrollador: true },
    { nombre: "jorge", edad: 35, esDesarrollador: false },
    { nombre: "monica", edad: 47, esDesarrollador: true },
];
personas.push({ nombre: "miranda", edad: 22, esDesarrollador: false });
console.log("Personas: ", personas);
/////////////////////////////////******TUPLAS */
var persona;
persona = ["luck", 5, true];
console.log("persona:", persona);
var personaTupla = [];
personaTupla.push(["luis", 5, true]);
personaTupla.push(["juan", 3, false]);
personaTupla.push(["miriam", 7, true]);
personaTupla.forEach(function (persona) {
    console.log("persona:", persona);
    var nombre = persona[0];
    var edad = persona[1];
    var esDesarrollador = persona[2];
    console.log("Nombre", nombre);
    console.log("edad", edad);
    console.log("es desarrollador", esDesarrollador);
});
////////////////////////////////Enum (enumeradores)
var DiaDeLaSemana;
(function (DiaDeLaSemana) {
    DiaDeLaSemana[DiaDeLaSemana["lunes"] = 0] = "lunes";
    DiaDeLaSemana[DiaDeLaSemana["martes"] = 1] = "martes";
    DiaDeLaSemana[DiaDeLaSemana["miercoles"] = 2] = "miercoles";
    DiaDeLaSemana[DiaDeLaSemana["jueves"] = 3] = "jueves";
    DiaDeLaSemana[DiaDeLaSemana["viernes"] = 4] = "viernes";
    DiaDeLaSemana[DiaDeLaSemana["sabado"] = 5] = "sabado";
    DiaDeLaSemana[DiaDeLaSemana["domingo"] = 6] = "domingo";
})(DiaDeLaSemana || (DiaDeLaSemana = {}));
var dia = DiaDeLaSemana.jueves;
console.log("dia:", DiaDeLaSemana[dia]); //muestra el nombre del dia
console.log("dia:", dia);
