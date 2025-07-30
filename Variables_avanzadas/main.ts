let variableAny: any;
variableAny = 42;
//variableAny = "hello";
//variableAny = "true";
console.log("Valor de variable any " + variableAny);
//////////////////////////////////////////////////////////////////////////////////////////////////
let variableDesconocida: unknown;
variableDesconocida = "hola";
// variableDesconocida = 42;
// variableDesconocida = true;

if (typeof variableDesconocida === "string") {
  console.log("variable unknown es un string:", variableDesconocida);
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// function throwError(message: string): never {
//   throw new Error(message);
// }

// throwError("Este es un error");
///////////////////////////////////////////////////////////////////////////////////////////////////
function logMessage(message: string): void {
  console.log("Log message:", message);
}

logMessage("Este es un mensaje de log");

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//El tipo variable any  permite asignar cualquier tipo de valor a una variable(numeros, boolenaso, string,)
//El tipo variable unknown es similar a any pero es más seguro. Una variable de tipo unknown puede recibir cualquier valor, pero no podemos realizar operaciones con ella sin antes verificar su tipo
//El tipo never es particularmente útil para manejar casos de error en aplicaciones complejas y para asegurar que ciertas partes del código nunca se ejecuten normalmente.

//Usa any cuando realmente no puedas predecir el tipo (aunque es mejor evitarlo cuando sea posible).
//Prefiere unknown sobre any cuando necesites flexibilidad pero quieras mantener la seguridad de tipos.
//Utiliza never para funciones que lanzan excepciones o nunca terminan.
//Aplica void para funciones que realizan acciones pero no retornan valores.
