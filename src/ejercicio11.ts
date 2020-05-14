/**
 * 4) Un zoólogo pretende determinar el porcentaje de animales que hay en las siguientes
 * tres categorías de edades: bebes de 0 a 1 año, joven de más de 1 año y menos de 3, y adultos de 3 o más años.
 * El zoológico todavía no está seguro del animal que va a estudiar.
 * Si se decide por elefantes solo tomará una muestra de 2 de ellos;  si se decide por las jirafas, tomará 5 muestras
 * y si son chimpancés tomará 1.
 */
class Ejercicio11 {
  // Categorias
  ELEFANTE = 'elefantico';
  JIRAFA = 'jirafa';
  CHIMPANCE = 'chimpance';

  animales: Animal[] = [
    {
      edad: 1,
      tipo: this.ELEFANTE,
    },
    {
      edad: 1,
      tipo: this.ELEFANTE,
    },
    {
      edad: 3,
      tipo: this.ELEFANTE,
    },
    {
      edad: 7,
      tipo: this.ELEFANTE,
    },
    {
      edad: 1,
      tipo: this.ELEFANTE,
    },
    {
      edad: 1,
      tipo: this.JIRAFA,
    },
    {
      edad: 2,
      tipo: this.JIRAFA,
    },
    {
      edad: 3,
      tipo: this.JIRAFA,
    },
    {
      edad: 1,
      tipo: this.JIRAFA,
    },
    {
      edad: 3,
      tipo: this.JIRAFA,
    },
    {
      edad: 1,
      tipo: this.CHIMPANCE,
    },
    {
      edad: 7,
      tipo: this.CHIMPANCE,
    },
  ];

  elefantes: Animal[] = this.animales.filter((animales: Animal) => animales.tipo === this.ELEFANTE);
  jirafas: Animal[] = this.animales.filter((animales: Animal) => animales.tipo === this.JIRAFA);
  chimpances: Animal[] = this.animales.filter((animales: Animal) => animales.tipo === this.CHIMPANCE);

  constructor() {
    this.generarReporte(this.CHIMPANCE, 2);
  }

  generarReporte(categoría: string, cantidadMuestras: number): void {
    switch (categoría) {
      case this.ELEFANTE:
        this.generarReporteEdad(this.elefantes);
        break;
      case this.JIRAFA:
        this.generarReporteEdad(this.jirafas);
        break;
      case this.CHIMPANCE:
        this.generarReporteEdad(this.chimpances);
        break;
      default:
        console.log("No es valido el animal"); 
      break;
    }
  }

  generarReporteEdad(animales: Animal[]): void {
    let contBebes = 0;
    let contJovenes = 0;
    let contAdultos = 0;

    console.log(animales);
    animales.forEach((element: Animal) => {
      if (element.edad <= 1) {
        contBebes++;
      } else if (element.edad === 2) {
        contJovenes++;
      } else {
        contAdultos++;
      }
    });

    console.log('Cantidad bebes: ', contBebes);
    console.log('Cantidad jovenes: ', contJovenes);
    console.log('Cantidad adultos: ', contAdultos);
  }
}

interface Animal {
  edad: number;
  tipo: string;
}

new Ejercicio11();
