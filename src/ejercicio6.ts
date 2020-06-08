class Ejercicio6 {

  constructor() {
    this.ejercicio6([-4, 2, 5, 7, 8, 3, -9]);
  }

  /**6)	Leer 20 números e imprimir cuántos son  positivos, cuántos negativos y cuántos neutros. */
  ejercicio6(numeros: number[]): void {
    let contPositivos = 0;
    let contNegativos = 0;
    numeros.forEach((element: number, i: number) => {
      if (numeros[i] > 1) {
        // contPositivos = contPositivos + 1;
        // contPositivos += 1;
        contPositivos++;
      } else {
        contNegativos++;
      }
      
    });
    // for (let i = 0; i < numeros.length; i++) {
    // }
    console.log('Son: ' + contNegativos, 'NEGATIVO');
    console.log('Son: ' + contPositivos, 'POSITIVO');
  }
}
new Ejercicio6();