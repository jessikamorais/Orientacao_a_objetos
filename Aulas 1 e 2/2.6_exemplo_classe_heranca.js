//Exemplo 2.6
//CLASSE - Modelo para criar objetos

class Pessoa {
    constructor(nome, anoDeNascimento, profissao){
        this.nome = nome;
        this.anoDeNascimento = anoDeNascimento;
        this.profissao = profissao;

    };
    ola(){
        console.log("Olá");
    };
    calculaIdade(){
        return new Date().getFullYear() - this.anoDeNascimento;
    };
};

const pessoa0= new Pessoa(['Carlos', 'Alberto'], 1990, "Estudante");
console.log(pessoa0)
console.log(pessoa0.calculaIdade());
pessoa0.ola();

//HERENÇA - Utilizar EXTENDS para "copiar o objeto principal" e 
//SUPER para copiar os parâmetros que serão utilizados do objeto principal

class Estudante extends Pessoa {
    constructor(nome, anoDeNascimento, profissao, matricula){
        super(nome, anoDeNascimento, profissao)
        this.matricula = matricula;
        };
};



const pessoa1 = new Estudante(['Maria', 'Edudarda'], 1998, "Estudante", 987456)
// console.log (pessoa1)

class EstudanteAnimado extends Pessoa{
    constructor(nome, anoDeNascimento, profissao, matricula){
        super(nome, anoDeNascimento, profissao)
        this.matricula = matricula;
    };
ola(){
    super.ola();
    console.log(" colega!")
    };
};

const pessoa2 = new EstudanteAnimado(["José, Inácio"], 1985, "Estudante", 456321)
console.log (pessoa2)
pessoa2.ola();