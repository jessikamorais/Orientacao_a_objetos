//Exemplo 3.14.1 - 01a_Array.js
//Exemplo de desestruturação, em cada posição do vetor é vinculado a uma variável
let nomeCompleto = ['Edson', "Ifarraguirre", "Moreno"];
var [primeiroNome, nomeDoMeio, ultimoNome] = nomeCompleto;

console.log("O primeiro nome é: "+primeiroNome)
console.log("O nome do meio é: " +nomeDoMeio)
console.log("O último nome é: "  +ultimoNome)

//Exemplo de desestruturação em que a primeira posição do vetor é vinculada a uma variável
// e todas as outras posições são vinculadas a apenas uma variável
var [primeiroNome, ...restante] = nomeCompleto
console.log("O primeiro nome é: "+primeiroNome)
console.log("O restante do nome é: \"" +restante.toString().replace(',', ' ')+'"')

//Exemplo de desestruturação, em que, apenas a primeira e a última posição do vetor são vinculadas à uma variável
var [soOPrimeiroNome, ,soOUltimoNome] = nomeCompleto
console.log("O primeiro nome é: "+soOPrimeiroNome)
console.log("O último nome é: "  +soOUltimoNome)