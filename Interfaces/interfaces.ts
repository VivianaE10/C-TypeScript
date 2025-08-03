interface Persona {
  nombre: string;
  edad: number;
  esDesarrollador: boolean;
}

let persona: Persona = {
  nombre: "vivi",
  edad: 36,
  esDesarrollador: true,
};

console.log("persona:", persona);

//////////// arreglo de tipo interface

let personas: Persona[] = [
  { nombre: "luzda", edad: 45, esDesarrollador: true },
  { nombre: "jorge", edad: 35, esDesarrollador: false },
  { nombre: "monica", edad: 47, esDesarrollador: true },
];

console.log("personas", personas);

//////////////////////////////inyerfas con metodos

interface Sumar {
  (a: number, b: number): number;
}

let sumar: Sumar = (a: number, b: number): number => {
  return a + b;
};

console.log("rescultado de suma", sumar(12, 3));
