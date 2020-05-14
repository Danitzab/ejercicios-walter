"use strict";
var Ejercicio6 = /** @class */ (function () {
    function Ejercicio6() {
        this.ejercicio6([-4, 2, 5, 7, 8, 3, -9 - 8, -3, 0, 11, 23, -23, -76, -98, 1, -1, 9, -5, -2, -54]);
    }
    /**6)	Leer 20 números e imprimir cuántos son  positivos, cuántos negativos y cuántos neutros. */
    Ejercicio6.prototype.ejercicio6 = function (numeros) {
        var contPositivos = 0;
        var contNegativos = 0;
        for (var i = 0; i < numeros.length; i++) {
            if (numeros[i] > 1) {
                // contPositivos = contPositivos + 1;
                // contPositivos += 1;
                contPositivos++;
            }
            else {
                contNegativos++;
            }
        }
        console.log('Son: ' + contNegativos, 'NEGATIVO');
        console.log('Son: ' + contPositivos, 'POSITIVO');
    };
    return Ejercicio6;
}());
new Ejercicio6();
