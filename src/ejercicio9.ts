/**
 * 1) Se debe realizar un muestreo con 50 personas para determinar el promedio de peso de los niños, jóvenes,
 * adultos y viejos que existen en su zona habitacional.
 *
 * Se determinan las categorías así:
 *  CATEGORIA			EDAD
 * 	Niños				0 - 12
 * 	Jóvenes				13 - 29
 * 	Adultos				30 - 59
 * 	Viejos				60 en adelante
 */
export default class Ejercicio9 {
  personas: Persona[] = [
    {
      edad: 15,
      peso: 60,
    },
    {
      edad: 47,
      peso: 80,
    },
    {
      edad: 25,
      peso: 55,
    },
    {
      edad: 7,
      peso: 23,
    },
    {
      edad: 60,
      peso: 80,
    },
    {
      edad: 27,
      peso: 65,
    },
    {
      edad: 13,
      peso: 30,
    },
    {
      edad: 3,
      peso: 12,
    },
    {
      edad: 5,
      peso: 15,
    },
  ];

  constructor() {
    this.ejercicio9();
  }

  ejercicio9(): void {
    // Personas por categoria (array)
    const ninos: Persona[] = this.personas.filter((persona: Persona) => persona.edad <= 12);
    const jovenes: Persona[] = this.personas.filter((persona: Persona) => persona.edad >= 13 && persona.edad < 29);
    const adultos: Persona[] = this.personas.filter((persona: Persona) => persona.edad >= 30 && persona.edad < 59);
    const viejos: Persona[] = this.personas.filter((persona: Persona) => persona.edad >= 60);

    // console.log('personas', this.personas);
    // console.log('Niños:', this.ninos);
    // console.log('Jovenes:', this.jovenes);
    // console.log('Adultos:', this.adultos);
    // console.log('Viejos:', this.viejos);

    console.log('-------');
    console.log('El promedio de peso de los niños es: ', this.obtenerPromedioPeso(ninos));
    console.log('El promedio de peso de los jovenes es: ', this.obtenerPromedioPeso(jovenes));
    console.log('El promedio de peso de los adultos es: ', this.obtenerPromedioPeso(adultos));
    console.log('El promedio de peso de los viejos es: ', this.obtenerPromedioPeso(viejos));
  }

  obtenerPromedioPeso(personas: Persona[]): number {
    let promedioPeso = 0;
    let pesoTotal = 0;

    for (let i = 0; i < personas.length; i++) {
      pesoTotal += personas[i].peso;
    }

    promedioPeso = pesoTotal / personas.length;
    return promedioPeso;
  }
}

interface Persona {
  edad: number;
  peso: number;
}

new Ejercicio9();
