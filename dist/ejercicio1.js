var Ejercicio1 = /** @class */ (function () {
    function Ejercicio1() {
        this.ejercicio1([1, 2, 5, 7, 3, 76, 4, 44, 32, 13]);
    }
    /** 1)	Leer 10 números y obtener su cubo y su cuarta.*/
    Ejercicio1.prototype.ejercicio1 = function (numeros) {
        numeros.forEach(function (element, i) {
            var cubo = 3;
            var cuarta = 4;
            console.log(i + ')', 'El cubo del numero es: ' + Math.pow(element, cubo));
            console.log(i + ')', 'La cuarta del numero es: ' + Math.pow(element, cuarta));
        });
        // for (let i = 0; i < numeros.length; i++) {
        // }
    };
    return Ejercicio1;
}());
new Ejercicio1();
//# sourceMappingURL=ejercicio1.js.map