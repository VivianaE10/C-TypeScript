"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var empleado_1 = require("./empleado");
var empleado = new empleado_1.Empleado("jonathan", 35, true, "Backend");
console.log(empleado.saludar());
console.log(empleado.obtenerInfo());
console.log("nombre:", empleado.nombre);
