//Exemplo 1.1
//Forma Literal de escrever um objeto

const date = new Date;
const curretYear=date.getFullYear();


var pessoa0 = {
	nome: ['Fulano', 'de Tal'],
	anoDeNascimento: 1990,
	profissao: 'Estudante',
	calculaIdade: function() {
		return newDate().getFullYear() - this.anoDeNascimento;
	
	},
}; 

console.log ('Criando um objeto com a forma literal' + pessoa0)