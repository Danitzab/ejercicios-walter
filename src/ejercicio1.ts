class Ejercicio1 {

  constructor() {
    this.ejercicio1([1, 2, 5, 7, 3, 76, 4, 44, 32, 13]);
  }

  /** 1)	Leer 10 números y obtener su cubo y su cuarta.*/
  ejercicio1(numeros: number[]): void {
    for (let i = 0; i < numeros.length; i++) {
      console.log(i + ')', 'El cubo del numero es: ' + Math.pow(numeros[i], 3));
      console.log(i + ')', 'La cuarta del numero es: ' + Math.pow(numeros[i], 4));
    }
  }
}
new Ejercicio1();
