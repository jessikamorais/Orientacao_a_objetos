//Exemplo 2.1
//Função que cria objetos recebendo parâmetros
function criaPessoaParametros (nome, anoDeNascimento, profissao){
	
	return{
		nome,
		anoDeNascimento,
		profissao,
		calculaIdade: function() {
			return curretYear - this.anoDeNascimento;

		}
	}
	
}

var pessoa1 = criaPessoaParametros ("Carla", 1973, "Administração")
console.log ('Adicionando parâmetros na função:' + pessoa1)