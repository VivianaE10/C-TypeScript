"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Empleado = void 0;
//extender la clase
var clase_1 = require("./clase");
var Empleado = /** @class */ (function (_super) {
    __extends(Empleado, _super);
    function Empleado(nombre, edad, esDesarrollador, puesto) {
        var _this = _super.call(this, nombre, edad, esDesarrollador) || this; //todos estos valores puedan ser sobreescritas en caso de agregar en la nueva clase
        _this.puesto = puesto; // pusto se hereda de la nueva clase empleado
        return _this;
    }
    Empleado.prototype.saludar = function () {
        return "".concat(_super.prototype.saludar.call(this), ", trabajo como").concat(this.puesto);
    };
    Empleado.prototype.obtenerInfo = function () {
        return "Tengo ".concat(_super.prototype.obtenerInfo.call(this), " a\u00F1os y trabajo como ").concat(this.puesto);
    };
    return Empleado;
}(clase_1.Persona));
exports.Empleado = Empleado;
