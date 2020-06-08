class Ejercicio5 {
  constructor() {
    this.ejercicio5([3, 4, 3, 2, 1, 1, 5]);
  }
  /**5)	Calcular el promedio de un alumno que tiene 7 calificaciones en la materia de Diseño de Algoritmos */
  ejercicio5(calificaciones: number[]): void {
    let promedio = 0;
    calificaciones.forEach((element: number) => {
      promedio += element;
    });
    promedio = promedio / calificaciones.length;
    if (promedio < 3) {
      console.log('Su promedio es : ' , promedio, 'No aprobo materia');
    } else {
      console.log('El promedio es: ', promedio, 'Aprobo materia');
    }
  }
}
new Ejercicio5();
