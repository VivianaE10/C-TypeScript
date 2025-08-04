interface Direccion {
  calle: string;
  numero: number;
  ciudad?: string; //? porpiedad opcional que no reqyuiere este campo de manera obligatoria
}

let dirreccion: Direccion = {
  calle: "Calle falsa",
  numero: 123,
  ciudad: "Manizales",
};

console.log(dirreccion);

////////////////////////////////propiedad read only(solo lectura)
//solo lectura quiere decir una vex que le asigne el valor a las propiedades no pueden ser modificadas
interface Persona {
  readonly nombre: string;
  readonly edad: number;
  readonly esDesarrollador: boolean;
}

let personaRead: Persona = {
  nombre: "mia",
  edad: 15,
  esDesarrollador: false,
};

console.log("persona", personaRead);

///////////////////////////////// interfaces extendida(crea nuevas intefaces basadas en las ua existentes y heredan sus propiedades y se crean nuevas)
interface Empleado extends Persona {
  readonly puesto: string;
}

let empleadoRead: Empleado = {
  //empeadoRead es de TIPO Empleado(entidad)
  nombre: "sandra",
  edad: 45,
  esDesarrollador: true,
  puesto: "Frontend",
};

console.log("empelado", empleadoRead);
