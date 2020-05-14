"use strict";
var Ejercicio2 = /** @class */ (function () {
    function Ejercicio2() {
        this.ejercicio2([1, 3, 4, -5, -8, 0, 9, 10, -13, -6]);
    }
    /** 2)	Leer 10 números e imprimir solamente los números positivos */
    Ejercicio2.prototype.ejercicio2 = function (numeros) {
        // console.log('numeros:', numeros);
        // console.log('longitud:', numeros.length);
        // console.log('primera:', numeros[0]);
        // console.log('ultima:', numeros[numeros.length - 1]);
        for (var i = 0; i < numeros.length; i++) {
            if (numeros[i] > 0) {
                console.log(i + ')', numeros[i], 'POSITIVO');
            }
            else {
                console.log(i + ')', numeros[i], 'NEGATIVO');
            }
        }
    };
    return Ejercicio2;
}());
new Ejercicio2();
