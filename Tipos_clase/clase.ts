export class Persona {
  public nombre: string; //accesible desde de cualquier parte
  public edad: number; //  protected accesible desde la clase y subclases
  private esDesarrollador: boolean; // accesible solo desde la clase restrigida

  constructor(nombre: string, edad: number, esDesarrollador: boolean) {
    this.nombre = nombre;
    this.edad = edad;
    this.esDesarrollador = esDesarrollador;
  }

  public saludar(): string {
    this.esDev;
    return `Hola mi nombre es ${this.nombre} y tengo ${this.edad} años`;
  }

  public obtenerEdad(): number {
    return this.edad;
  }

  private esDev(): boolean {
    return this.esDesarrollador;
  }

  public obtenerInfo(): string {
    return `${this.nombre} tiene ${this.edad} años`;
  }
}

//prefijo this(se refiere a la propiedad de la clase)
