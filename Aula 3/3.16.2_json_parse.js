//Exemplo 3.16.2 - 02a_restricaoDeTipos.js
var json = '{ "name":"John Doe", "birth":"2017-11-30T12:00:00.000Z", "city":"Porto Alegre"}'

var obj = JSON.parse(json, function (key, value) {
   if (key == "birth") {
      return new Date(value);
   }
   return value;
});

//O código pega o texto da data de nascimento e reconhece realmente como uma data
console.log("Nome:  " + obj.name);
console.log("DNasc: " + obj.birth);