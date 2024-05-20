//Exemplo 3.12.1
// "Consome" o valor de um objeto
// O objeto primeiro é criado com o parâmetro "55", que é o valor máximo que o tanque pode ser abastecido.
import {Carro} from "./3.12.2_caso02_carro.mjs"

var carro = new Carro(55)
console.log(carro.capacidade)
console.log(carro.tanque)

carro.tanque = 10
console.log(carro.tanque)

carro.tanque = 10
console.log(carro.tanque)

carro.tanque = 10
console.log(carro.tanque)

carro.tanque = 10
console.log(carro.tanque)

carro.tanque = 10
console.log(carro.tanque)

carro.tanque = 10
console.log(carro.tanque)

carro.tanque = 10
console.log(carro.tanque)