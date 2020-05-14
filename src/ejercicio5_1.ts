class Ejercicio5_1 {

  constructor() {
    this.ejercicio5_1([3, 4, 3]);
  }
  /** 5.1 Calcular el promedio de un alumno recibiendo un array de calificaciones.*/
  ejercicio5_1(calificaciones: number[]): void {
    let promedio = 0;

    for (let i = 0; i < calificaciones.length; i++) {
      promedio += calificaciones[i];
    }
    promedio = promedio / calificaciones.length;

    if (promedio < 3) {
      console.log('Su promedio es : ' + promedio, 'No aprobo materia');
    } else {
      console.log('El promedio es: ', promedio, 'Aprobo materia');
    }
  }
}
new Ejercicio5_1();
