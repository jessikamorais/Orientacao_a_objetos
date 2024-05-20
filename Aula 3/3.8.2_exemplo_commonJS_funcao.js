//Exemplo 3.8.1 - Consumindo a função

const circulo = require('./3.8.1_exemplo_commonJS_funcao');
console.log(`Área do círculo de raio 4 é ${circulo.area(4)}`);

//Acessando diretamente a função "area", aqui não é possível acessar a função da "circunferência"
const {area} = require('./3.8.1_exemplo_commonJS_funcao');
console.log(`Área do círculo de raio 2 é ${area(2)}`);