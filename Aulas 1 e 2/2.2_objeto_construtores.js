//Exemplo 2.2
//CONSTRUTORES - Funções que criam objetos
function pessoaConstrutor (){
	this.nome = ['Fulano',  'de Tal'];
	this.anoDeNascimento = 1988;
	this.profissao = "Professor";
	this.calculaIdade = function(){
		return new Date().getFullYear() - this.anoDeNascimento;
	}
}

const pessoa2 = new pessoaConstrutor();
console.log ('Criando um objeto com o uso de Construtores:' + pessoa2)
//console.log (pessoa2.calculaIdade())