var Ejercicio5 = /** @class */ (function () {
    function Ejercicio5() {
        this.ejercicio5([3, 4, 3, 2, 1, 1, 5]);
    }
    /**5)	Calcular el promedio de un alumno que tiene 7 calificaciones en la materia de Diseño de Algoritmos */
    Ejercicio5.prototype.ejercicio5 = function (calificaciones) {
        var promedio = 0;
        calificaciones.forEach(function (element) {
            promedio += element;
        });
        promedio = promedio / calificaciones.length;
        if (promedio < 3) {
            console.log('Su promedio es : ', promedio, 'No aprobo materia');
        }
        else {
            console.log('El promedio es: ', promedio, 'Aprobo materia');
        }
    };
    return Ejercicio5;
}());
new Ejercicio5();
//# sourceMappingURL=ejercicio5.js.map