//Exemplo 2.7
//CRIAR OBJETO COMO REFERÊNCIA DE UM OBJETO ANTERIOR
function criarPessoa (){
    return {
        nome: "Gabriel",
        anoDeNascimento: 1985,
        profissao: 'Carteiro',
    };
};

const pessoa1 = criarPessoa();
const pessoa2 = pessoa1;
console.log (pessoa1);
console.log (pessoa2);

//Alterando o ano de nascimento da pessoa 2
pessoa2.anoDeNascimento = 1983;


console.log ("A nova data de nascimento também é inserida no objeto usado como referência: " + pessoa1.anoDeNascimento);
console.log ("Objeto em que a data de nascimento foi alterada: " + pessoa2.anoDeNascimento);
