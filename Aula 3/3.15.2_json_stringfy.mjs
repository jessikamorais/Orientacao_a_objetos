//Exemplo 3.15.2 - 02a_ObjetoDeClasse2JSON.js

import {UmaClasse} from "./3.14.2.2_exemplo_2_desestruturacao.mjs"

let umObjetoDeClasse = new UmaClasse("um valor")
let json = JSON.stringify(umObjetoDeClasse);

//Uma classe é transformada em formato JSON, porém, o atributo que estava como oculto (#) não é "visto" pelo JSON
//nem o seu método, como no caso do exemplo anterior
console.log(json);