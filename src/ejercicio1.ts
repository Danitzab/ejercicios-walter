class Ejercicio1 {
  constructor() {
    this.ejercicio1([1, 2, 5, 7, 3, 76, 4, 44, 32, 13]);
  }

  /** 1)	Leer 10 números y obtener su cubo y su cuarta.*/
  ejercicio1(numeros: number[]): void {
    numeros.forEach((element: number, i: number) => {
      const cubo = 3;
      const cuarta = 4;
      console.log(i + ')', 'El cubo del numero es: ' + Math.pow(element, cubo));
      console.log(i + ')', 'La cuarta del numero es: ' + Math.pow(element, cuarta));
    });
    // for (let i = 0; i < numeros.length; i++) {
    // }
  }
}
new Ejercicio1();
