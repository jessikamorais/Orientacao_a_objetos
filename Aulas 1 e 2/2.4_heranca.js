//Exemplo 2.4
//PROTÓTIPOS
function pessoaPrototipo () {
    this.nome = ['Fulano', 'de Tal'];
    this.anoDeNascimento = 1985;
    this.profissao = "Estudante";
this.calculaIdade = function() {
    return new Date().getFullYear() - this.anoDeNascimento;
}
};

const pessoa4= new pessoaPrototipo ();
const pessoa5 = new pessoaPrototipo ();
console.log (pessoa4)
console.log (pessoa5)
console.log("Forma de acessar o protótipo do objeto " + Object.getPrototypeOf(pessoa4));
// console.log(pessoa4.valueOf())