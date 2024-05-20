//Exemplo 3.10.1 - 03a_consumidor_es6.mjs
import {area, circunferencia as circ} from "./3.10.2_exemplo_ES6.mjs";
console.log(`Área do círculo de raio 4 é ${area(4)}`);
console.log(`Circunferência do círculo de raio 4 é ${circ(4)}`);

import * as circulo from "./3.10.2_exemplo_ES6.mjs";
console.log(`Área do círculo de raio 2 é ${circulo.area(2)}`);