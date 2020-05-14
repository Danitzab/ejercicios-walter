"use strict";
var Ejercicio8 = /** @class */ (function () {
    function Ejercicio8() {
        this.ejercicio8([1, 3, 0, 5, 0, 1.6, 9]);
    }
    /**
     * 8)	Suponga que se tiene un conjunto de calificaciones de un grupo de 40 alumnos.  Realizar un algoritmo para calcular
     * la calificación media y la calificación mas baja de todo el grupo.
     */
    Ejercicio8.prototype.ejercicio8 = function (notas) {
        var notasTotales = 0;
        var promedioDeNotas = 0;
        var notaMinima = 0;
        for (var i = 0; i < notas.length; i++) {
            notasTotales += notas[i];
            if (i === 0) {
                notaMinima = notas[i];
            }
            else {
                if (notas[i] < notaMinima) {
                    notaMinima = notas[i];
                }
            }
        }
        promedioDeNotas = notasTotales / notas.length;
        console.log('La media de las notas de los estudiantes es: ', promedioDeNotas);
        console.log('La nota mas baja es:', notaMinima);
    };
    return Ejercicio8;
}());
new Ejercicio8();
