function PersonaDev(target: Function) {
  //invoco al decorador
  console.log(target);

  target.prototype.despedir = function (despedida: string) {
    return `${despedida}, ${this.nombre}`;
  };
}

@PersonaDev // decorador
class Pesona2 {
  nombre: string;
  edad: number;

  constructor(nombre: string, edad: number) {
    this.nombre = nombre;
    this.edad = edad;
  }

  saludar(saludo: string): string {
    return `${saludo}, mi nombre es ${this.nombre} y tengo ${this.edad} años`;
  }
  despedir!: (despedida: string) => string; //!puede tener o no valores nulos
}

let usuario = new Pesona2("vivi", 32);
console.log(usuario.saludar("hola"));
console.log(usuario.despedir("adios"));
