//Exemplo 2.8
class Pessoa {
    static NOME_CLASSE = "Pessoa";
    constructor(nome, anoDeNascimento, profissao){
        this.nome = nome;
        this.anoDeNascimento;
        this.profissao = profissao;
    };

    ola(){
        console.log("Olá");
    };
    calculaIdade(){
        return new Date().getFullYear() - this.anoDeNascimento;
    };
}


console.log(Pessoa.NOME_CLASSE)


class Pessoa2 {
    constructor(nome, anoDeNascimento, profissao) {
    this.nome = nome;
    this.anoDeNascimento = anoDeNascimento;
    this.profissao = profissao;
    };
    static ola() {
    console.log("Olá");
    };
    calculaIdade() {
    return new Date().getFullYear() - this.anoDeNascimento;
    };
    };
    console.log(Pessoa2.ola());