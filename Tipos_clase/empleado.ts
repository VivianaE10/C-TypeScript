//extender la clase
import { Persona } from "./clase";

export class Empleado extends Persona {
  public puesto: string;

  constructor(
    nombre: string,
    edad: number,
    esDesarrollador: boolean,
    puesto: string
  ) {
    super(nombre, edad, esDesarrollador); //todos estos valores puedan ser sobreescritas en caso de agregar en la nueva clase
    this.puesto = puesto; // pusto se hereda de la nueva clase empleado
  }

  public saludar(): string {
    return `${super.saludar()}, trabajo como${this.puesto}`;
  }

  public obtenerInfo(): string {
    return `Tengo ${super.obtenerInfo()} años y trabajo como ${this.puesto}`;
  }
}
