import { Empleado } from "./empleado";

let empleado = new Empleado("jonathan", 35, true, "Backend");

console.log(empleado.saludar());
console.log(empleado.obtenerInfo());

console.log("nombre:", empleado.nombre);
