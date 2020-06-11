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

class Ejercicio15 {
  constructor() {
    this.ejercicio15([20, 15, 0, 2, 5, 8, 6, 0, 7]);
  }

  ejercicio15(numeroPlaca: number[]): void {
    for (let i = 0; i < numeroPlaca.length; i++) {
      if (numeroPlaca[i] === 1 || numeroPlaca[i] === 2) {
        console.log('Placa Amarilla');
      } else if (numeroPlaca[i] === 3 || numeroPlaca[i] === 4) {
        console.log('Placa Rosa');
      } else if (numeroPlaca[i] === 5 || numeroPlaca[i] === 6) {
        console.log('Placa Roja');
      } else if (numeroPlaca[i] === 7 || numeroPlaca[i] === 8) {
        console.log('Placa Verde');
      } else if (numeroPlaca[i] === 9 || numeroPlaca[i] === 0) {
        console.log('Placa Azul');
      } else {
        console.log('Placa no encontrada');
      }
    }
    console.log('El numero de vehiculos que ingreso fue de:', numeroPlaca.length);
  }
}

new Ejercicio15();
