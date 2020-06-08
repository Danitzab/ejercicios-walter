var Ejercicio4 = /** @class */ (function () {
    function Ejercicio4() {
        this.ejercicio4([-1, -5, -7, -13, -7, -9, -23, -4, -8, -11, -15, -3, -55, -19, -18]);
    }
    /**4)	Leer 15 números negativos, convertirlos a positivos e imprimir  dichos números. */
    Ejercicio4.prototype.ejercicio4 = function (numerosNegativo) {
        for (var i = 0; i < numerosNegativo.length; i++) {
            var resultadoPositivo = Math.abs(numerosNegativo[i]);
            console.log(i + ')', 'El resultado es: ', resultadoPositivo);
        }
    };
    return Ejercicio4;
}());
new Ejercicio4();
//# sourceMappingURL=ejercicio4.js.map