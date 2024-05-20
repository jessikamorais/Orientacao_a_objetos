//Exemplo 1.2
//Fábricas, funções que criam e retornam um objeto
function criarPessoa() {
	return {
		nome: ['Fulano', 'de Tal'],
		anoDeNascimento: 1980,
		profissao: 'Estudante',
		calculaIdade:function(){
			return newDate().getFullYear() - this.anoDeNascimento;
			
		}
	}

}

const pessoa = criarPessoa();
console.log('Criando um objeto com o uso de funções (Fábricas):' + pessoa);