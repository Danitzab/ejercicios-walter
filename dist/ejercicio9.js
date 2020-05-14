"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 1) Se debe realizar un muestreo con 50 personas para determinar el promedio de peso de los niños, jóvenes,
 * adultos y viejos que existen en su zona habitacional.
 *
 * Se determinan las categorías así:
 *  CATEGORIA			EDAD
 * 	Niños				0 - 12
 * 	Jóvenes				13 - 29
 * 	Adultos				30 - 59
 * 	Viejos				60 en adelante
 */
var Ejercicio9 = /** @class */ (function () {
    function Ejercicio9() {
        this.personas = [
            {
                edad: 15,
                peso: 60,
            },
            {
                edad: 47,
                peso: 80,
            },
            {
                edad: 25,
                peso: 55,
            },
            {
                edad: 7,
                peso: 23,
            },
            {
                edad: 60,
                peso: 80,
            },
            {
                edad: 27,
                peso: 65,
            },
            {
                edad: 13,
                peso: 30,
            },
            {
                edad: 3,
                peso: 12,
            },
            {
                edad: 5,
                peso: 15,
            },
        ];
        this.ejercicio9();
    }
    Ejercicio9.prototype.ejercicio9 = function () {
        // Personas por categoria (array)
        var ninos = this.personas.filter(function (persona) { return persona.edad <= 12; });
        var jovenes = this.personas.filter(function (persona) { return persona.edad >= 13 && persona.edad < 29; });
        var adultos = this.personas.filter(function (persona) { return persona.edad >= 30 && persona.edad < 59; });
        var viejos = this.personas.filter(function (persona) { return persona.edad >= 60; });
        // console.log('personas', this.personas);
        // console.log('Niños:', this.ninos);
        // console.log('Jovenes:', this.jovenes);
        // console.log('Adultos:', this.adultos);
        // console.log('Viejos:', this.viejos);
        console.log('-------');
        console.log('El promedio de peso de los niños es: ', this.obtenerPromedioPeso(ninos));
        console.log('El promedio de peso de los jovenes es: ', this.obtenerPromedioPeso(jovenes));
        console.log('El promedio de peso de los adultos es: ', this.obtenerPromedioPeso(adultos));
        console.log('El promedio de peso de los viejos es: ', this.obtenerPromedioPeso(viejos));
    };
    Ejercicio9.prototype.obtenerPromedioPeso = function (personas) {
        var promedioPeso = 0;
        var pesoTotal = 0;
        for (var i = 0; i < personas.length; i++) {
            pesoTotal += personas[i].peso;
        }
        promedioPeso = pesoTotal / personas.length;
        return promedioPeso;
    };
    return Ejercicio9;
}());
exports.default = Ejercicio9;
new Ejercicio9();
