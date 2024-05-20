//Exemplo 3.9.1 - 02a_consumidor
//Consumindo as funções definidas na classe
const Circulo = require('./3.9.1_exemplo_commonJS_objeto');
const c1 = new Circulo(4);
console.log(`Área do círculo de raio 4 é ${c1.area()}`);