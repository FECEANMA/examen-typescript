// Crear distintos planetas
export class Planeta {
    nombre: string;
    tipoRecurso: TipoRecurso;
    peligros: Peligro[];
  
    constructor(nombre: string, tipoRecurso: TipoRecurso, peligros: Peligro[]) {
      this.nombre = nombre;
      this.tipoRecurso = tipoRecurso;
      this.peligros = peligros;
    }
  }
 enum TipoRecurso {
    Agua,
    Oxígeno,
    Minerales,
    Vegetación,
  }
  
  enum Peligro {
    Tormentas,
    Radiación,
    Temperaturasextremas,
    Criaturaspeligrosas,
  }
  // Creación de planetas
  const tierra = new Planeta("Tierra", TipoRecurso.Agua, [Peligro.Tormentas]);
  const marte = new Planeta("Marte", TipoRecurso.Minerales, [Peligro.Radiación, Peligro.Temperaturasextremas]);
  const jupiter = new Planeta("Júpiter", TipoRecurso.Minerales, [Peligro.Tormentas, Peligro.Criaturaspeligrosas]);
  const saturno = new Planeta("Saturno", TipoRecurso.Minerales, [Peligro.Temperaturasextremas, Peligro.Criaturaspeligrosas]);

// Representar eventos aleatorios que la nave puede encontrar
export class Evento {
    nombre: string;
    efecto: string;
  
    constructor(nombre: string, efecto: string) {
      this.nombre = nombre;
      this.efecto = efecto;
    }
  
    ejecutar() {
      // Lógica para ejecutar el evento y aplicar el efecto en la nave y la misión
      console.log(`Se ha ejecutado el evento ${this.nombre}. Efecto: ${this.efecto}`);
    }
  }
  
  // Ejemplo de uso
  const evento1 = new Evento("Monstruo ataca", "La nave pierde energía y debe repararse");
  evento1.ejecutar();
  
  const evento2 = new Evento("Lluvia de meteoritos", "La nave sufre daños en su estructura");
  evento2.ejecutar();
