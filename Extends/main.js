var nombre = "luis es una persona gtandiosa que le gusta comer helados";
console.log(nombre.length);
function ontenerLongitud(obj) {
    var longitud = obj.length; // voy a saber la longitud del objeto
    var tipo = typeof obj; // el tipo de dato del objeton recibido
    console.log("el tipo de dato es: ".concat(tipo, " y la longitud es: ").concat(longitud));
    return obj.length;
}
console.log(ontenerLongitud("holaaa"));
console.log(ontenerLongitud([1, 2, 3, 4, 5, 6]));
