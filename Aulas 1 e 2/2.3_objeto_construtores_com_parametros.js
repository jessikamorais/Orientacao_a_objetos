//Exemplo 2.3
//CONSTRUTORES - Funções que criam objetos (com parâmetros)
function pessoaConstrutor2 (nome, anoDeNascimento, profissao){
	this.nome = nome;
	this.anoDeNascimento = anoDeNascimento;
	this.profissao = profissao;
	this.calculaIdade = function(){
		return new Date().getFullYear() - this.anoDeNascimento;
	}
}

const pessoa3 = new pessoaConstrutor2("Carla", 1993, "Aposentada")
console.log ('Constutores com parâmetros:' + pessoa3);
//console.log (pessoa3.calculaIdade());