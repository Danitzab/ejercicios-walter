var Ejercicio3 = /** @class */ (function () {
    function Ejercicio3() {
        this.ejercicio3(3);
    }
    /** 3)	Calcular e imprimir la tabla de multiplicar de un número cualquiera.
     * Imprimir  el multiplicando, el multiplicador y el producto */
    Ejercicio3.prototype.ejercicio3 = function (numeroTabla) {
        for (var i = 1; i < 10; i++) {
            var resultado = i * numeroTabla;
            console.log('El resultado de ' + numeroTabla + ' x ' + i + ' = ', resultado);
        }
    };
    return Ejercicio3;
}());
new Ejercicio3();
//# sourceMappingURL=ejercicio3.js.map