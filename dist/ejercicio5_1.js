"use strict";
var Ejercicio5_1 = /** @class */ (function () {
    function Ejercicio5_1() {
        this.ejercicio5_1([3, 4, 3]);
    }
    /** 5.1 Calcular el promedio de un alumno recibiendo un array de calificaciones.*/
    Ejercicio5_1.prototype.ejercicio5_1 = function (calificaciones) {
        var promedio = 0;
        for (var i = 0; i < calificaciones.length; i++) {
            promedio += calificaciones[i];
        }
        promedio = promedio / calificaciones.length;
        if (promedio < 3) {
            console.log('Su promedio es : ' + promedio, 'No aprobo materia');
        }
        else {
            console.log('El promedio es: ', promedio, 'Aprobo materia');
        }
    };
    return Ejercicio5_1;
}());
new Ejercicio5_1();
