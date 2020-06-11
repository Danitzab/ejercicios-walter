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
    this.ejercicio15([1, 2, 5, 8, 6, 0, 7]);
  }

  ejercicio15(numeroPlaca: number[]): void {
    
     let ultimoNumeroPlaca = [ 1, 2, 3, 4, 5, 6, 7, 8, 9];       

     numeroPlaca.forEach((element) => {
        
       if (ultimoNumeroPlaca[element] === 1 || ultimoNumeroPlaca[element] === 2) {
         console.log('Placa Amarilla');
       }
       else if (ultimoNumeroPlaca[element] === 3 || ultimoNumeroPlaca[element] === 4) {
         console.log('Placa Rosa');
       }
       else if (ultimoNumeroPlaca[element] === 5 || ultimoNumeroPlaca[element] === 6) {
         console.log('Placa Roja');
       }
       else if (ultimoNumeroPlaca[element] === 7 || ultimoNumeroPlaca[element] === 8) {
         console.log('Placa Verde');
       }
       else if (ultimoNumeroPlaca[element] === 9 || ultimoNumeroPlaca[element] === 0) {
         console.log('Placa Azul');
       }
     });
  }
}

new Ejercicio15();
