class Ejercicio7 {

  constructor() {
    this.ejercicio7();
  }

  /**7)	Simular el comportamiento de un reloj digital, imprimiendo la hora,
   * minutos y segundos de un día desde las 0:00:00 horas hasta las 23:59:59 horas */
  ejercicio7(): void {
    // let horasTexto = '';
    // let minutosTexto = '';
    // let segundosTexto = '';

    for (let horas = 0; horas < 3; horas++) {
      // if (horas < 10) {
      //   horasTexto = '0' + horas;
      // } else {
      //   horasTexto = '' + horas;
      // }
      for (let minutos = 0; minutos < 20; minutos++) {
        // if (minutos < 10) {
        //   minutosTexto = '0' + minutos;
        // } else {
        //   minutosTexto = '' + minutos;
        // }
        for (let segundos = 0; segundos < 20; segundos++) {
          // if (segundos < 10) {
          //   segundosTexto = '0' + segundos;
          // } else {
          //   segundosTexto = '' + segundos;
          // }
          // console.log(horasTexto + ':' + minutosTexto + ':' + segundosTexto);
          console.log(
            (horas < 10 ? '0' + horas : horas) +
              ':' +
              (minutos < 10 ? '0' + minutos : minutos) +
              ':' +
              (segundos < 10 ? '0' + segundos : segundos)
          );
        }
      }
    }
  }
}
new Ejercicio7();
