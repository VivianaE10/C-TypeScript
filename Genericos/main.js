function identity(arg) {
    return arg;
}
//funciones genericas
var output1 = identity("hola");
console.log("output1: " + output1);
var output2 = identity(34);
console.log("output2: ", output2);
//clases genericas
var Caja = /** @class */ (function () {
    function Caja(contenido) {
        this.contenido = contenido;
    }
    Caja.prototype.obtenerContenido = function () {
        return this.contenido;
    };
    return Caja;
}());
//objeto
var cajaDeString = new Caja("libros");
console.log("Contenido de la caja de string: ", cajaDeString.obtenerContenido());
var cajaDeNumber = new Caja(10);
console.log("Contenido de la caja de Number: ", cajaDeNumber.obtenerContenido());
var cajaDeBoolean = new Caja(true);
console.log("Contenido de la caja de bolean: ", cajaDeBoolean.obtenerContenido());
//<T> tipo generico(recibe cualquier tipo de variable cualquier valor)
