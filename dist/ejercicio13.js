"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var number_util_1 = require("./number-util");
/**
 * Una compañía de seguros tiene contratados a n vendedores.
 * Cada uno hace tres ventas a la semana.  Su política de pagos es que un vendedor recibe
 * un sueldo base y un 10% extra por comisiones de sus ventas.  El gerente de la compañía desea
 * saber cuánto dinero obtendrá en la semana cada vendedor, por concepto de comisiones por las
 * tres ventas realizadas, y cuánto, tomando en cuenta su sueldo base y sus comisiones.
 */
var Ejercicio13 = /** @class */ (function () {
    function Ejercicio13() {
        //   vendedores
        this.vendedores = [
            {
                name: 'Alberto',
                sales: 3,
            },
            {
                name: 'Wes Bos',
                sales: 4,
            },
            {
                name: 'Ryan Florence',
                sales: 2,
            },
            {
                name: 'Scott Tolinski',
                sales: 3,
            },
            {
                name: 'Mark Zuckerberg',
                sales: 3,
            },
        ];
        this.ejercicio13([]);
    }
    Ejercicio13.prototype.ejercicio13 = function (vendedores) {
        var sueldoBase = 890000;
        var comision = 0.1;
        var extra = 0;
        // const ventaSemana = 3;
        // this.vendedores.forEach(element => {
        //     if (ventaSemana === element.sales) {
        //       extra = comision * sueldoBase;
        //       console.log(`El sueldo base es ${sueldoBase} + comisión ${extra} = $${sueldoBase + extra}`);
        //     } else {
        //       console.log(` No tiene comisión y su sueldo semanal es $${sueldoBase}`);
        //     }
        // });
        for (var i = 0; i < this.vendedores.length; i++) {
            extra = comision * sueldoBase;
            extra = extra * this.vendedores[i].sales;
            console.log("El sueldo base es $" + number_util_1.formatCurrency(sueldoBase, 0) + " + comisi\u00F3n $" + number_util_1.formatCurrency(extra, 0) + " = $" + number_util_1.formatCurrency(sueldoBase + extra, 0));
        }
    };
    return Ejercicio13;
}());
new Ejercicio13();
//# sourceMappingURL=ejercicio13.js.map