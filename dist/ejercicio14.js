/**
 * En una empresa se requiere calcular el salario semanal de cada uno de los n obreros que laboran en ella.
 *  El salario se obtiene así:  Si el obrero trabaja 40 horas o menos se le paga $20 por hora.
 * Si trabaja más de 40 horas se paga $20 por cada una de las primeras 40 horas y $25 por cada extra.
 */
var Ejercicio14 = /** @class */ (function () {
    function Ejercicio14() {
        this.ejercicio14([45, 20]);
    }
    Ejercicio14.prototype.ejercicio14 = function (horasTrabajo) {
        var pagoXHora = 20;
        var extra = 25;
        var pagoSemanal = 0;
        horasTrabajo.forEach(function (element) {
            if (element <= 40 || element > 40) {
                pagoSemanal = pagoXHora * element;
                console.log("El pago semanal $" + pagoSemanal);
            }
            else {
                pagoSemanal = pagoXHora * element;
                pagoSemanal = pagoSemanal + extra;
                console.log("El pago semanal $" + pagoSemanal);
            }
        });
    };
    return Ejercicio14;
}());
new Ejercicio14();
//# sourceMappingURL=ejercicio14.js.map