class Ejercicio6 {

  constructor() {
    this.ejercicio6([-4, 2, 5, 7, 8, 3, -9 - 8, -3, 0, 11, 23, -23, -76, -98, 1, -1, 9, -5, -2, -54]);
  }

  /**6)	Leer 20 números e imprimir cuántos son  positivos, cuántos negativos y cuántos neutros. */
  ejercicio6(numeros: number[]): void {
    let contPositivos = 0;
    let contNegativos = 0;
    for (let i = 0; i < numeros.length; i++) {
      if (numeros[i] > 1) {
        // contPositivos = contPositivos + 1;
        // contPositivos += 1;
        contPositivos++;
      } else {
        contNegativos++;
      }
    }
    console.log('Son: ' + contNegativos, 'NEGATIVO');
    console.log('Son: ' + contPositivos, 'POSITIVO');
  }
}
new Ejercicio6();