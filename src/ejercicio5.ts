class Ejercicio5 {

  constructor() {
    this.ejercicio5(3, 4, 3, 2, 1, 1, 5);
  }
  /**5)	Calcular el promedio de un alumno que tiene 7 calificaciones en la materia de Diseño de Algoritmos */
  ejercicio5(
    calificacion1: number,
    calificacion2: number,
    calificacion3: number,
    calificacion4: number,
    calificacion5: number,
    calificacion6: number,
    calificacion7: number
  ): void {
    const promedio = (calificacion1 + calificacion2 + calificacion3 + calificacion4 + calificacion5 + calificacion6 + calificacion7) / 7;
    if (promedio < 3) {
      console.log('Su promedio es : ' + promedio, 'No aprobo materia');
    } else {
      console.log('El promedio es: ', promedio, 'Aprobo materia');
    }
  }
}
new Ejercicio5();
