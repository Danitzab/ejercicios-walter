/**
 * En una empresa se requiere calcular el salario semanal de cada uno de los n obreros que laboran en ella.
 *  El salario se obtiene así:  Si el obrero trabaja 40 horas o menos se le paga $20 por hora.
 * Si trabaja más de 40 horas se paga $20 por cada una de las primeras 40 horas y $25 por cada valorHoraExtra.
 */
class Ejercicio14 {
  constructor() {
    this.ejercicio14([55, 20, 75, 30, 40]);
  }
  ejercicio14(horasTrabajo: number[]): void {
    const cantHorasLegales = 40;
    const valorHora = 20;
    const valorHoraExtra = 25;
    
    horasTrabajo.forEach((element) => {
      let pagoSemanal = 0;
      if (element <= cantHorasLegales) {
        pagoSemanal = valorHora * element;
        console.log(`El pago semanal $${pagoSemanal}`);
      } else {
        const horasAdicionales = element % cantHorasLegales;
        pagoSemanal = (cantHorasLegales * valorHora) + (horasAdicionales * valorHoraExtra);
        console.log(`El pago semanal $${pagoSemanal}`);
      }
    });
  }
}

new Ejercicio14();
