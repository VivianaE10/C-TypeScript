var h1 = document.querySelector("h1");
console.log(h1 === null || h1 === void 0 ? void 0 : h1.textContent); //? que el valo no sea null y textContent es para que me salga solo el texto, sin las etiquetas
var title = document.querySelector(".title"); //HTMLHeadingElement Tipado correcto de elementos HTML
console.log(title === null || title === void 0 ? void 0 : title.textContent);
var message = document.querySelector("#message");
console.log(message.placeholder);
console.log("hola vivi");
//Cuando seleccionamos elementos del DOM, siempre existe la posibilidad de que el elemento no exista.
//TypeScript nos ayuda a manejar estos casos con el operador de encadenamiento opcional (?):
//Este operador ? nos permite acceder a propiedades de un objeto que podría ser nulo sin causar errores en tiempo de ejecución.
// TypeScript proporciona interfaces específicas para cada tipo de elemento HTML:
// HTMLHeadingElement para elementos de encabezado (h1, h2, etc.)
// HTMLInputElement para elementos de entrada
// HTMLButtonElement para botones
