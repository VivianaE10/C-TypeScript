//*******Colecciones de datos
let nombres: string[] = ["vivi", "marce", "jaco"];
console.log("Nombres: ", nombres);

let edades: number[] = [40, 20, 12];
console.log("Edades", edades);
////////////////////////////////////////////////////////////////////////////////////////////////

//***areglos tipo any(mixtos reciben cualquier tipo de valor)
let mixto: any[] = ["vivi", 32, true];
console.log("Mixto:", mixto);
///////////////////////////////////////////////////////////////////////////////////////////////////////

//*****arreglo tipo intefaces tipod se datos mas complejos
interface Persona {
  nombre: string;
  edad: number;
  esDesarrollador: boolean;
}
let personas: Persona[] = [
  { nombre: "luzda", edad: 45, esDesarrollador: true },
  { nombre: "jorge", edad: 35, esDesarrollador: false },
  { nombre: "monica", edad: 47, esDesarrollador: true },
];

personas.push({ nombre: "miranda", edad: 22, esDesarrollador: false });

console.log("Personas: ", personas);
/////////////////////////////////******TUPLAS */
let persona: [string, number, boolean];
persona = ["luck", 5, true];

console.log("persona:", persona);

let personaTupla: [string, number, boolean][] = [];

personaTupla.push(["luis", 5, true]);
personaTupla.push(["juan", 3, false]);
personaTupla.push(["miriam", 7, true]);

personaTupla.forEach((persona) => {
  console.log("persona:", persona);

  let nombre: string = persona[0];
  let edad: number = persona[1];
  let esDesarrollador: boolean = persona[2];

  console.log("Nombre", nombre);
  console.log("edad", edad);
  console.log("es desarrollador", esDesarrollador);
});
////////////////////////////////Enum (enumeradores)
enum DiaDeLaSemana {
  lunes,
  martes,
  miercoles,
  jueves,
  viernes,
  sabado,
  domingo,
}

let dia: DiaDeLaSemana = DiaDeLaSemana.jueves;

console.log("dia:", DiaDeLaSemana[dia]); //muestra el nombre del dia

console.log("dia:", dia); //muestra la poscion, el indece de la lista
