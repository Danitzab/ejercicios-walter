"use strict";
/**
 * 4) Un zoólogo pretende determinar el porcentaje de animales que hay en las siguientes
 * tres categorías de edades: bebes de 0 a 1 año, joven de más de 1 año y menos de 3, y adultos de 3 o más años.
 * El zoológico todavía no está seguro del animal que va a estudiar.
 * Si se decide por elefantes solo tomará una muestra de 2 de ellos;  si se decide por las jirafas, tomará 5 muestras
 * y si son chimpancés tomará 1.
 */
var Ejercicio11 = /** @class */ (function () {
    function Ejercicio11() {
        var _this = this;
        // Categorias
        this.ELEFANTE = 'elefantico';
        this.JIRAFA = 'jirafa';
        this.CHIMPANCE = 'chimpance';
        this.animales = [
            {
                edad: 1,
                tipo: this.ELEFANTE,
            },
            {
                edad: 1,
                tipo: this.ELEFANTE,
            },
            {
                edad: 3,
                tipo: this.ELEFANTE,
            },
            {
                edad: 7,
                tipo: this.ELEFANTE,
            },
            {
                edad: 1,
                tipo: this.ELEFANTE,
            },
            {
                edad: 1,
                tipo: this.JIRAFA,
            },
            {
                edad: 2,
                tipo: this.JIRAFA,
            },
            {
                edad: 3,
                tipo: this.JIRAFA,
            },
            {
                edad: 1,
                tipo: this.JIRAFA,
            },
            {
                edad: 3,
                tipo: this.JIRAFA,
            },
            {
                edad: 1,
                tipo: this.CHIMPANCE,
            },
            {
                edad: 7,
                tipo: this.CHIMPANCE,
            },
        ];
        this.elefantes = this.animales.filter(function (animales) { return animales.tipo === _this.ELEFANTE; });
        this.jirafas = this.animales.filter(function (animales) { return animales.tipo === _this.JIRAFA; });
        this.chimpances = this.animales.filter(function (animales) { return animales.tipo === _this.CHIMPANCE; });
        this.generarReporte(this.CHIMPANCE, 2);
    }
    Ejercicio11.prototype.generarReporte = function (categoría, cantidadMuestras) {
        switch (categoría) {
            case this.ELEFANTE:
                this.generarReporteEdad(this.elefantes);
                break;
            case this.JIRAFA:
                this.generarReporteEdad(this.jirafas);
                break;
            case this.CHIMPANCE:
                this.generarReporteEdad(this.chimpances);
                break;
            default:
                console.log("No es valido el animal");
                break;
        }
    };
    Ejercicio11.prototype.generarReporteEdad = function (animales) {
        var contBebes = 0;
        var contJovenes = 0;
        var contAdultos = 0;
        console.log(animales);
        animales.forEach(function (element) {
            if (element.edad <= 1) {
                contBebes++;
            }
            else if (element.edad === 2) {
                contJovenes++;
            }
            else {
                contAdultos++;
            }
        });
        console.log('Cantidad bebes: ', contBebes);
        console.log('Cantidad jovenes: ', contJovenes);
        console.log('Cantidad adultos: ', contAdultos);
    };
    return Ejercicio11;
}());
new Ejercicio11();
