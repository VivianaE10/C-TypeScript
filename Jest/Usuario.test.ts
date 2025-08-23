// archivo de pruebas

import { Usuario } from "./Usuario";

// hacemos la descripcion del usuario
describe("Usuario class", () => {
  //creamos la variable
  let usuario: Usuario;
  // creamos al instancia del objeto usuario
  beforeEach(() => {
    usuario = new Usuario("vivi", "vivi@gmail", "developer", 23, true);
  });

  //creamos los metodos

  //metodo que regrese el nombre correcto
  test("should return the correct name", () => {
    expect(usuario.getName()).toBe("vivi");
  });

  //metodo que espera el perfil correcto
  test("should return the correct profile", () => {
    const expectedProfile =
      "El usuario es vivi, se dedica a developer y tiene 23 años de experiencia.";
    expect(usuario.getProfile()).toBe(expectedProfile);
  });

  //metodo adicinal para mirar el estado activo del usuario
  test("should return the correct active status", () => {
    expect(usuario.isStillActive()).toBe(true);
  });

  //metodo que regresa falso o usuario inactivo
  test("should return false for inactive user", () => {
    usuario = new Usuario("vivi", "vivi@gmail", "developer", 23, false);
    expect(usuario.isStillActive()).toBe(false);
  });
});
