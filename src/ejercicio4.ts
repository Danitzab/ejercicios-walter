class Ejercicio4 {
    
  constructor() {
    this.ejercicio4([-1, -5, -7, -13, -7, -9, -23, -4, -8, -11, -15, -3, -55, -19, -18]);
  }
  /**4)	Leer 15 números negativos, convertirlos a positivos e imprimir  dichos números. */
  ejercicio4(numerosNegativo: number[]): void {
    for (let i = 0; i < numerosNegativo.length; i++) {
      const resultadoPositivo = Math.abs(numerosNegativo[i]);
      console.log(i + ')', 'El resultado es: ', resultadoPositivo);
    }
  }
}
new Ejercicio4();
