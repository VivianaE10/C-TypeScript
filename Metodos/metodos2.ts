function saludar(nombre: string, saludo?: string): string {
  if (saludo) {
    return `${saludo}, ${nombre}!`;
  } else {
    return `hola, ${nombre}!`;
  }
}

console.log(saludar("vivi"));
console.log(saludar("vivi", "bunos dias"));

// ? parametros opcionales si el saludo esta o no esta

//////////////////////////parametro multiples ...
function sumarTodos(...numeros: number[]): number {
  return numeros.reduce((acumulado, actual) => acumulado + actual, 0);
}

console.log("resultados de sumar todos", sumarTodos(1, 2, 3, 4, 5));

//////////////////////////valores ´por defecto
function despedir(nombre: string, despedida: string = "adios"): string {
  return `${despedida}, ${nombre}!`;
}

console.log(despedir("vivi"));
console.log(despedir("vivi", "bye bye"));
