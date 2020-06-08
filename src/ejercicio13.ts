import { formatCurrency } from './number-util';

/**
 * Una compañía de seguros tiene contratados a n vendedores.
 * Cada uno hace tres ventas a la semana.  Su política de pagos es que un vendedor recibe
 * un sueldo base y un 10% extra por comisiones de sus ventas.  El gerente de la compañía desea
 * saber cuánto dinero obtendrá en la semana cada vendedor, por concepto de comisiones por las
 * tres ventas realizadas, y cuánto, tomando en cuenta su sueldo base y sus comisiones.
 */
class Ejercicio13 {
  //   vendedores
  vendedores: vendedor[] = [
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

  constructor() {
    this.ejercicio13([]);
  }

  ejercicio13(vendedores: vendedor[]): void {
    const sueldoBase = 890000;
    const comision = 0.1;
    const ventaSemana = 3;
    let extra = 0;

    // this.vendedores.forEach(element => {
    //     if (ventaSemana === element.sales) {
    //       extra = comision * sueldoBase;
    //       console.log(`El sueldo base es ${sueldoBase} + comisión ${extra} = $${sueldoBase + extra}`);
    //     } else {
    //       console.log(` No tiene comisión y su sueldo semanal es $${sueldoBase}`);
    //     }
    // });
    for (let i = 0; i < this.vendedores.length; i++) {
      extra = comision * sueldoBase;
      extra = extra * this.vendedores[i].sales;
      console.log(
        `El sueldo base es $${formatCurrency(sueldoBase, 0)} + comisión $${formatCurrency(extra, 0)} = $${formatCurrency(
          sueldoBase + extra,
          0
        )}`
      );
    }
  }
}

interface vendedor {
  name: string;
  sales: number;
}

new Ejercicio13();
