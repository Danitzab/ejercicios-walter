var Ejercicio6 = /** @class */ (function () {
    function Ejercicio6() {
        this.ejercicio6([-4, 2, 5, 7, 8, 3, -9]);
    }
    /**6)	Leer 20 números e imprimir cuántos son  positivos, cuántos negativos y cuántos neutros. */
    Ejercicio6.prototype.ejercicio6 = function (numeros) {
        var contPositivos = 0;
        var contNegativos = 0;
        numeros.forEach(function (element, i) {
            if (numeros[i] > 1) {
                // contPositivos = contPositivos + 1;
                // contPositivos += 1;
                contPositivos++;
            }
            else {
                contNegativos++;
            }
        });
        // for (let i = 0; i < numeros.length; i++) {
        // }
        console.log('Son: ' + contNegativos, 'NEGATIVO');
        console.log('Son: ' + contPositivos, 'POSITIVO');
    };
    return Ejercicio6;
}());
new Ejercicio6();
//# sourceMappingURL=ejercicio6.js.map