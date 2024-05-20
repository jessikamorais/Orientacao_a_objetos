//Exemplo 3.12.1 - 04a_consumidor_es6.mjs
export class Circulo {
    constructor(r) {
      this.raio = r;
    }
    area() {
      return Math.PI * this.raio ** 2;
    }
    circunferencia() {
      return 2 * Math.PI * this.raio;
    }
  }
  