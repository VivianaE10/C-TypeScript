let nombre: string = "luis es una persona gtandiosa que le gusta comer helados";

console.log(nombre.length);

function ontenerLongitud<T extends { length: number }>(obj: T): number {
  let longitud: number = obj.length; // voy a saber la longitud del objeto
  let tipo: string = typeof obj; // el tipo de dato del objeton recibido
  console.log(`el tipo de dato es: ${tipo} y la longitud es: ${longitud}`);
  return obj.length;
}

console.log(ontenerLongitud("holaaa"));
console.log(ontenerLongitud([1, 2, 3, 4, 5, 6]));
