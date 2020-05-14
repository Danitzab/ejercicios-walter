import Persona from "./persona";

export default class Trabajador {
  persona: Persona;

  constructor(persona: Persona) {
    this.persona = persona;
  }

  saludar(profesion: string) {
    console.log(`Hola ${this.persona.nombre} ${this.persona.apellido} tienes ${this.persona.edad} años y eres ${profesion}`);
  }
}
