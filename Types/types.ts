import { Persona } from "./../Clases/clase";
type PersonaType = {
  nombre: string;
  edad: number;
};

///////////////////////////////////////////////////7tipos de type
// Este mapped type recorre todas las propiedades del tipo original y les añade un signo de interrogación, indicando que pueden aceptar valores nulos.

///////////////////////////////////Types parciales

type Partial<T> = {
  [P in keyof T]?: T[P];
};

type PersonaParcial = Partial<PersonaType>;
// Resultado equivalente a:
// {
//   nombre?: string;
//   edad?: number;
// }

//////////////////////7 Types de solo lectura
// Puedes crear un tipo que haga que todas las propiedades de otro tipo sean opcionales:

type SoloLectura<T> = {
  readonly [K in keyof T]: T[K];
};

type PersonaSoloLectura = SoloLectura<PersonaType>;
// Resultado equivalente a:
// {
//   readonly nombre: string;
//   readonly edad: number;
// }

let persona: PersonaSoloLectura = {
  nombre: "vivi",
  edad: 34,
};

console.log(persona.nombre);

////////////////////////////////Template literal types
//Estos tipos permiten crear variantes basadas en cadenas literales:
//
type Variantes = "pequeño" | "mediano" | "grande";
type ClaseCSS = `boton-${Variantes}`;

// let botonPequeño: ClaseCSS = "boton-pequeño";
// let botonMediano: ClaseCSS = "boton-mediano";
// let botonGrande: ClaseCSS = "boton-grande";

// Los template literal types son perfectos para trabajar con convenciones de nomenclatura consistentes, como clases CSS o identificadores de elementos.

////////////////////////////////////////Conditional types
//Los tipos condicionales permiten realizar evaluaciones y determinar el tipo resultante basado en condiciones:

type EsNumero<T> = T extends number ? true : false;

function esNumero<T>(valor: T): EsNumero<T> {
  return (typeof valor === "number") as any;
}

const resultado1 = esNumero(42); // true
const resultado2 = esNumero("hello"); // false

console.log(resultado1);
console.log(resultado2);

// Los types son una forma de estructurar datos,no tienen equivalencia directa en JavaScript.
// Esto significa que puedes utilizarlos ampliamente durante el desarrollo,
// pero al compilar tu código a JavaScript, estos desaparecen sin dejar rastro,
// a menos que crees un objeto basado en ellos.
