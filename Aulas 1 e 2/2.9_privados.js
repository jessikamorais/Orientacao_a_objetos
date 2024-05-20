//Exemplo 2.9
//ATRIBUTOS E MÉTODOS PODEM SER PÚBLICOS OU PRIVADOS
//PRIVADOS USO DE "#"

//Utilizar o "let" (Neste caso, no console, não irá aparecer os dados que estão com "#"
// irão aparacer como "undefined")

function pessoaLet () {
	let nome = ['Fulano', 'de Tal'];
	let anoDeNascimento = 1990;
		let profissao = 'Estudante';
	this.calculaIdade = function() {
		return new Date().getFullYear() - anoDeNascimento;
	}
};

const pessoa0 = new pessoaLet();
// console.log(pessoa0);
// console.log(pessoa0.calculaIdade());


//PRIVADOS USO DE "#"
// Repetindo uma classe já usada
class Pessoa {
    constructor(nome, anoDeNascimento, profissao){
        this.nome = nome;
        this.anoDeNascimento = anoDeNascimento;
        this.profissao = profissao;

    };
    ola(){
        console.log("Olá");
    };
};

class Estudante extends Pessoa {
	#matricula;
	constructor(nome, anoDeNascimento, profissao, matricula) {
		super(nome, anoDeNascimento, profissao);
		this.#matricula = matricula;
		this.#ola();
	};
	get matricula(){
		return this.#matricula
	};
	set matricula(valor){
		this.#matricula = valor; //permite alterar o valor da matricula
	}

	#ola() {
		super.ola();
		console.log(" colega!")
	};
};

	const aluno = new Estudante("Fulano", 1990, "Estudante",
	120901);
	console.log(aluno);
	// console.log(aluno.ola()) Não está funcioando certinho "ola" está aparecendo
	console.log(aluno.matricula) //Matrícula não pode ser acessada se não houver o get
	// console.log(aluno.getmatricula)
	aluno.matricula = 1990; // não era para alterar, deveria alterar apenas com o "set"
	console.log(aluno.matricula);


	// Criando novo aluno para testar o "SET" 

	const aluno1 = new Estudante ("Ciclano", 1985, "estudante", 963258)
	console.log (aluno1)
	console.log(aluno1.matricula)


	// Criando a matrícula como um objeto (Não está funcionando o exemplo, era para conseguir alterar a matricula)

	// const aluno1 = new Estudante ("Ciclano", 1985, "estudante", {numero: 56789, modalidade: "regular"})
	// // console.log(aluno1)
	// var matriculaDoAluno1 = aluno1.getmatricula();
	// console.log(matriculaDoAluno1)
	

	//TENTAR NOVAMENTE