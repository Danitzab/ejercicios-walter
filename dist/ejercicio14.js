/**
 * En una empresa se requiere calcular el salario semanal de cada uno de los n obreros que laboran en ella.
 *  El salario se obtiene así:  Si el obrero trabaja 40 horas o menos se le paga $20 por hora.
 * Si trabaja más de 40 horas se paga $20 por cada una de las primeras 40 horas y $25 por cada valorHoraExtra.
 */
var Ejercicio14 = /** @class */ (function () {
    function Ejercicio14() {
        this.ejercicio14([55, 20, 75, 30, 40]);
    }
    Ejercicio14.prototype.ejercicio14 = function (horasTrabajo) {
        var cantHorasLegales = 40;
        var valorHora = 20;
        var valorHoraExtra = 25;
        horasTrabajo.forEach(function (element) {
            var pagoSemanal = 0;
            if (element <= cantHorasLegales) {
                pagoSemanal = valorHora * element;
                console.log("El pago semanal $" + pagoSemanal);
            }
            else {
                var horasAdicionales = element % cantHorasLegales;
                pagoSemanal = (cantHorasLegales * valorHora) + (horasAdicionales * valorHoraExtra);
                console.log("El pago semanal $" + pagoSemanal);
            }
        });
    };
    return Ejercicio14;
}());
new Ejercicio14();
//# sourceMappingURL=ejercicio14.js.map