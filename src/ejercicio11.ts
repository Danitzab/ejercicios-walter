import {shuffle} from './array-util'

/**
 * 4) Un zoólogo pretende determinar el porcentaje de animales que hay en las siguientes
 * tres categorías de edades: bebes de 0 a 1 año, joven de más de 1 año y menos de 3, y adultos de 3 o más años.
 * El zoológico todavía no está seguro del animal que va a estudiar.
 * Si se decide por elefantes solo tomará una muestra de 2 de ellos;  si se decide por las jirafas, tomará 5 muestras
 * y si son chimpancés tomará 1.
 */
class Ejercicio11 {
  // Categorias
  ELEFANTE = 'ELEFANTE';
  JIRAFA = 'JIRAFA';
  CHIMPANCE = 'CHIMPANCE';

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
    this.generarReporte(this.ELEFANTE, 2);
  }

  generarReporte(categoria: string, cantidadMuestras: number): void {
    switch (categoria) {
      case this.ELEFANTE:
        this.generarReporteEdad(this.elefantes, cantidadMuestras, this.ELEFANTE);
        break;
      case this.JIRAFA:
        this.generarReporteEdad(this.jirafas, cantidadMuestras, this.JIRAFA);
        break;
      case this.CHIMPANCE:
        this.generarReporteEdad(this.chimpances, cantidadMuestras, this.CHIMPANCE);
        break;
      default:
        console.log('No es valido el animal');
        break;
    }
  }

  generarReporteEdad(animales: Animal[], cantidadMuestras: number, categoria: string): void {
    let contBebes = 0;
    let contJovenes = 0;
    let contAdultos = 0;

    if (cantidadMuestras > animales.length) {
      console.log(`No tenemos la cantidad ingresada, tenemos solo ${animales.length} ${categoria}`);
    } else {
      console.log(`La cantidad total de ${categoria} son ${animales.length}  pero solo necesito ${cantidadMuestras} muestras`);
      
      // Reordenando el array de forma aleatoria
      shuffle(animales);
      for (let index = 0; index < cantidadMuestras; index++) {
        if (animales[index].edad <= 1) {
          contBebes++;
        } else if (animales[index].edad === 2) {
          contJovenes++;
        } else {
          contAdultos++;
        }
      }
    }

    // console.log(animales);

    // let index = 0;
    // while (index < cantidadMuestras) {
    //   if (animales[index].edad <= 1) {
    //     contBebes++;
    //   } else if (animales[index].edad === 2) {
    //     contJovenes++;
    //   } else {
    //     contAdultos++;
    //   }
    //   console.log('index', index);
    // index++;
    // }

    // animales.forEach((element: Animal, index: number) => {
    //   if (index < cantidadMuestras) {
    //     if (element.edad <= 1) {
    //       contBebes++;
    //     } else if (element.edad === 2) {
    //       contJovenes++;
    //     } else {
    //       contAdultos++;
    //     }
    //   }
    // });

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
