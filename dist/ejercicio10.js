"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var number_util_1 = require("./number-util");
/**
 * 2) Al cerrar un expendio de naranjas, 15 clientes que aún no han pagado
 * recibirán un 15% de descuento si compran más de 10 kilos.
 * Determinar cuánto pagará cada cliente y cuánto percibirá la tienda por compras.
 * */
var Ejercicio10 = /** @class */ (function () {
    function Ejercicio10() {
        this.ejercicio10([5, 6, 12, 15, 23, 4, 22]);
    }
    Ejercicio10.prototype.ejercicio10 = function (cantidadNaranjas) {
        var costoKilo = 2500;
        var ventas = 0;
        var descuento = 0;
        cantidadNaranjas.forEach(function (element) {
            var costoTotalNaranjas = costoKilo * element;
            ventas += costoTotalNaranjas;
            if (element >= 10) {
                descuento = costoTotalNaranjas * 0.15;
            }
            console.log("Total Compra: " + element + "kg = " + number_util_1.formatCurrency(costoTotalNaranjas, 0));
            console.log("Descuento: " + number_util_1.formatCurrency(descuento, 0));
            console.log("Total a Pagar: " + number_util_1.formatCurrency((costoTotalNaranjas - descuento), 0));
            console.log('----------');
        });
        console.log("El total de las ventas de las naranjas fue de: " + number_util_1.formatCurrency((ventas - descuento), 0));
    };
    return Ejercicio10;
}());
new Ejercicio10();
//# sourceMappingURL=ejercicio10.js.map