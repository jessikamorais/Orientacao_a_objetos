//Exemplo 3.9.1 - 02a_definicao
//Classe definindo as funções a serem utilizadas
class Circulo {
    constructor(r) {
      this.raio = r;
    }
    area() {
      return Math.PI * this.raio**2;
    }
    circunferencia() {
      return 2 * Math.PI * this.raio;
    }
  }; 
  
  module.exports = Circulo