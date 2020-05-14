import { formatCurrency } from './number-util';

/**
 * 2) Al cerrar un expendio de naranjas, 15 clientes que aún no han pagado
 * recibirán un 15% de descuento si compran más de 10 kilos.
 * Determinar cuánto pagará cada cliente y cuánto percibirá la tienda por compras.
 * */
class Ejercicio10 {
  constructor() {
    this.ejercicio10([5, 6, 12, 15, 23, 4, 22]);
  }

  ejercicio10(cantidadNaranjas: number[]): void {
    const costoKilo = 2500;
    let ventas = 0;
    let descuento = 0;

    cantidadNaranjas.forEach((element: number) => {
      let costoTotalNaranjas = costoKilo * element;
      ventas += costoTotalNaranjas;

      if (element >= 10) {
        descuento = costoTotalNaranjas * 0.15;
      }

      console.log(`Total Compra: ${element}kg = ${formatCurrency(costoTotalNaranjas, 0)}`);
      console.log(`Descuento: ${formatCurrency(descuento, 0)}`);
      console.log(`Total a Pagar: ${formatCurrency((costoTotalNaranjas - descuento), 0)}`);
      console.log('----------');
    });
    console.log(`El total de las ventas de las naranjas fue de: ${formatCurrency((ventas - descuento), 0)}`);    
  }  
}

new Ejercicio10();
