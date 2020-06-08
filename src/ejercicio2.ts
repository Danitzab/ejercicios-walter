class Ejercicio2 {
  constructor() {
    this.ejercicio2([1, 3, 4, -5, -8, 0, 9, 10, -13, -6]);
  }
  /** 2)	Leer 10 números e imprimir solamente los números positivos */
  ejercicio2(numeros: number[]): void {
    // console.log('numeros:', numeros);
    // console.log('longitud:', numeros.length);
    // console.log('primera:', numeros[0]);
    // console.log('ultima:', numeros[numeros.length - 1]);

    numeros.forEach((element: number, i: number) => {
      if (element > 0) {
        console.log(i + ')', element, 'POSITIVO');
      } else {
        console.log(i + ')', element, 'NEGATIVO');
      }
    });

    // for (let i = 0; i < numeros.length; i++) {
    // }
  }
}
new Ejercicio2();
