//Exemplo 2.5
//Herança prototipada

function pessoaPrototipada (nome, anoDeNascimento, profissao){
	this.nome = nome;
	this.anoDeNascimento = anoDeNascimento;
	this.profissao = profissao;
	this.calculaIdade = function (){
		return new Date().getFullYear() - this.anoDeNascimento;
	}
}

const pessoa6 = new pessoaPrototipada("Carla", 1963, "Aposentada");
console.log(pessoa6)
console.log ("Idade da pessoa: " + pessoa6.calculaIdade());
console.log(Object.getPrototypeOf(pessoa6));
// pessoa6.prototype.saudar = function() {
//     console.log("Olá");
//     };
//     console.log(pessoa6);


// console.log(pessoa6["prototype"])
// console.log(pessoa6.valueOf())
