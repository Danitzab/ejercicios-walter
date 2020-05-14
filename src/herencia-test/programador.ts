import Trabajador from './trabajador';
import Persona from './persona';

export default class Programador extends Trabajador {
  constructor() {
    const persona: Persona = {
      nombre: 'Leonardo',
      apellido: 'Solano',
      edad: 30,
    };

    super(persona);

    this.saludar('programador');
  }
}

new Programador();
