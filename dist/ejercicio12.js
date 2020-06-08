var Ejercicio12 = /** @class */ (function () {
    function Ejercicio12() {
        this.ejercicio12([5, 5, 2]);
    }
    Ejercicio12.prototype.ejercicio12 = function (numeros) {
        var resultadoSuma = 0;
        for (var i = 0; i < numeros.length; i++) {
            resultadoSuma += numeros[i];
        }
        console.log('El resultado de la suma es:', resultadoSuma);
    };
    return Ejercicio12;
}());
new Ejercicio12();
//# sourceMappingURL=ejercicio12.js.map