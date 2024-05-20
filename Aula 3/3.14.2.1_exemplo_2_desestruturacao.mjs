//Exemplo 3.14.2.1 - 03a_ObjetoDeClasse.mjs

import {UmaClasse} from "./3.14.2.2_exemplo_2_desestruturacao.mjs"

let umaClasse = new UmaClasse("Primeiro atributo")

let {capturaPrimeiroAtributo: umAtributo, outroAtributo} = umaClasse;

//Ao tentar a desestruturação, está não é possível, pois o atributo dentro do objeto está protegido
console.log("um Atributo: " + umAtributo)

//É possível acessar o atributo dentro do objeto ao realizar a desestruturação, pois, o objeto não está protegido
console.log("Outro Atributo: " + outroAtributo)