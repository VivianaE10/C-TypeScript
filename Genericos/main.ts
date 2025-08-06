function identity<T>(arg: T): T {
  return arg;
}
//funciones genericas
let output1 = identity<string>("hola");
console.log("output1: " + output1);

let output2 = identity<number>(34);
console.log("output2: ", output2);

//clases genericas

class Caja<T> {
  //clase es de tipo generico que resibe cualquier tipo de valor
  private contenido: T;

  constructor(contenido: T) {
    this.contenido = contenido;
  }

  public obtenerContenido(): T {
    return this.contenido;
  }
}
//objeto
let cajaDeString = new Caja<string>("libros");
console.log(
  "Contenido de la caja de string: ",
  cajaDeString.obtenerContenido()
);

let cajaDeNumber = new Caja<number>(10);
console.log(
  "Contenido de la caja de Number: ",
  cajaDeNumber.obtenerContenido()
);

let cajaDeBoolean = new Caja<boolean>(true);
console.log(
  "Contenido de la caja de bolean: ",
  cajaDeBoolean.obtenerContenido()
);

//<T> tipo generico(recibe cualquier tipo de variable cualquier valor)
