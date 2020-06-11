/**
 * El Dpto. de Seguridad Pública y Tránsito del D.F. desea saber,
 * de los n autos que entran a la ciudad de México, cuántos entran con calcomanía de cada color.
 * Conociendo el ultimo dígito de la placa de cada automóvil se puede determinar el color de la
 * calcomanía utilizando la sig. relación:
 * DÍGITO		COLOR
 * 1 o 2			amarilla
 * 3 o 4			rosa
 * 5 o 6			roja
 * 7 o 8			verde
 * 9 o 0			azul
 */
var Ejercicio15 = /** @class */ (function () {
    function Ejercicio15() {
        this.ejercicio15([20, 15, 0, 2, 5, 8, 6, 0, 7]);
    }
    Ejercicio15.prototype.ejercicio15 = function (placas) {
        for (var i = 0; i < placas.length; i++) {
            if (placas[i] === 1 || placas[i] === 2) {
                console.log('Placa Amarilla');
            }
            else if (placas[i] === 3 || placas[i] === 4) {
                console.log('Placa Rosa');
            }
            else if (placas[i] === 5 || placas[i] === 6) {
                console.log('Placa Roja');
            }
            else if (placas[i] === 7 || placas[i] === 8) {
                console.log('Placa Verde');
            }
            else if (placas[i] === 9 || placas[i] === 0) {
                console.log('Placa Azul');
            }
            else {
                console.log('Placa no encontrada');
            }
        }
        console.log('El numero de vehiculos que ingreso fue de:', placas.length);
    };
    return Ejercicio15;
}());
new Ejercicio15();
//# sourceMappingURL=ejercicio15.js.map