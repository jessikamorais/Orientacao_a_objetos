//Exemplo 3.16.1 - 01a_Parseobjeto.js
let user = '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';
// propriedade ainda não existe, logo teremos erro - não é possível acessar como vetor ao que é texto
//console.log(user.friends[0] ?? "Propriedade inexistente");

//transformação do formato de texto (json) em objeto
user = JSON.parse(user);
console.log(user.friends[0]);