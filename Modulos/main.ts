//importando metodos
import { suma, resta, multiplicacion, division } from "./calculadora";
import { Pi } from "./calculadora";

console.log(suma(10, 154));

console.log(resta(Pi, 1)); // estoy implementando un metodo y una constante heredado de un archivo

//se compila solo el archivo main.ts para que se haga extensiva esa compilacion al archivo calculadora.ts porque la estoy invocando desde el primer archivo
