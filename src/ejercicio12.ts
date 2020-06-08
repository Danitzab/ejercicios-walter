class Ejercicio12 {
  constructor() {
    this.ejercicio12([5, 5, 2]);
  }

  ejercicio12(numeros: number[]): void {
    let resultadoSuma = 0;
    for (let i = 0; i < numeros.length; i++) {
      resultadoSuma += numeros[i];
    }
    console.log('El resultado de la suma es:', resultadoSuma);
  }
}

new Ejercicio12();
