"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var array_util_1 = require("./array-util");
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
        this.ELEFANTE = 'ELEFANTE';
        this.JIRAFA = 'JIRAFA';
        this.CHIMPANCE = 'CHIMPANCE';
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
        this.generarReporte(this.ELEFANTE, 2);
    }
    Ejercicio11.prototype.generarReporte = function (categoria, cantidadMuestras) {
        switch (categoria) {
            case this.ELEFANTE:
                this.generarReporteEdad(this.elefantes, cantidadMuestras, this.ELEFANTE);
                break;
            case this.JIRAFA:
                this.generarReporteEdad(this.jirafas, cantidadMuestras, this.JIRAFA);
                break;
            case this.CHIMPANCE:
                this.generarReporteEdad(this.chimpances, cantidadMuestras, this.CHIMPANCE);
                break;
            default:
                console.log('No es valido el animal');
                break;
        }
    };
    Ejercicio11.prototype.generarReporteEdad = function (animales, cantidadMuestras, categoria) {
        var contBebes = 0;
        var contJovenes = 0;
        var contAdultos = 0;
        if (cantidadMuestras > animales.length) {
            console.log("No tenemos la cantidad ingresada, tenemos solo " + animales.length + " " + categoria);
        }
        else {
            console.log("La cantidad total de " + categoria + " son " + animales.length + "  pero solo necesito " + cantidadMuestras + " muestras");
            // Reordenando el array de forma aleatoria
            array_util_1.shuffle(animales);
            for (var index = 0; index < cantidadMuestras; index++) {
                if (animales[index].edad <= 1) {
                    contBebes++;
                }
                else if (animales[index].edad === 2) {
                    contJovenes++;
                }
                else {
                    contAdultos++;
                }
            }
        }
        // console.log(animales);
        // let index = 0;
        // while (index < cantidadMuestras) {
        //   if (animales[index].edad <= 1) {
        //     contBebes++;
        //   } else if (animales[index].edad === 2) {
        //     contJovenes++;
        //   } else {
        //     contAdultos++;
        //   }
        //   console.log('index', index);
        // index++;
        // }
        // animales.forEach((element: Animal, index: number) => {
        //   if (index < cantidadMuestras) {
        //     if (element.edad <= 1) {
        //       contBebes++;
        //     } else if (element.edad === 2) {
        //       contJovenes++;
        //     } else {
        //       contAdultos++;
        //     }
        //   }
        // });
        console.log('Cantidad bebes: ', contBebes);
        console.log('Cantidad jovenes: ', contJovenes);
        console.log('Cantidad adultos: ', contAdultos);
    };
    return Ejercicio11;
}());
new Ejercicio11();
//# sourceMappingURL=ejercicio11.js.map