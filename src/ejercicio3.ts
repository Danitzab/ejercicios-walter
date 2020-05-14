class Ejercicio3 {

  constructor() {
    this.ejercicio3(3);
  }
  /** 3)	Calcular e imprimir la tabla de multiplicar de un número cualquiera. 
   * Imprimir  el multiplicando, el multiplicador y el producto */
  ejercicio3(numeroTabla: number): void {
    for (let i = 1; i < 10; i++) {
      const resultado = i * numeroTabla;
      console.log('El resultado de ' + numeroTabla + ' x ' + i + ' = ', resultado);
    }
  }
}
new Ejercicio3();
