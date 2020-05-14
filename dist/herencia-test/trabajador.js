"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Trabajador = /** @class */ (function () {
    function Trabajador(persona) {
        this.persona = persona;
    }
    Trabajador.prototype.saludar = function (profesion) {
        console.log("Hola " + this.persona.nombre + " " + this.persona.apellido + " tienes " + this.persona.edad + " a\u00F1os y eres " + profesion);
    };
    return Trabajador;
}());
exports.default = Trabajador;
