import Trabajador from './trabajador';
import Persona from './persona';

export default class Avaluador extends Trabajador {
  constructor() {
    const persona: Persona = {
      nombre: 'Danitza',
      apellido: 'Bonilla',
      edad: 25,
    };

    super(persona);

    this.saludar('avaluador');
  }

  saludar(profesion: string) {
    console.log(`Hola ${this.persona.nombre} - ${profesion}`)
  }
}

new Avaluador();
