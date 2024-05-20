//Exemplos com let

//Exemplo 1 - 02a_let.js
function testVar(){
    let let01="let01"
    {
        let let02="let02"
        console.log("01a."+let01) 
        console.log("01b."+let02)
    }
    console.log("02a."+let01)
}
testVar()

console.log("Resultado do exemplo 1, todos os valores definidos para 'let' funcionando, pois estão dentro do mesmo bloco" )
console.log("----------------------------------------------------------------- \n")


//Exemplo 2 - 02b_let.js
function testVar_2(){
    let let01_2="let01_2"
    {
        let let02_2="let02_2"
        console.log("01a."+let01_2)
        console.log("01b."+let02_2)
    }
    console.log("02a."+let01_2)
    console.log("02b."+let02_2) //a variável não pode ser acessada fora do bloco que foi definida
}
testVar_2()

console.log("Resultado do exemplo 2, a variável não pode ser acessada fora do bloco que foi definida" )
console.log("----------------------------------------------------------------- \n")

//Exemplo 3 - 02c_let.js
function testVar_3(){
    let let01_3="let01_3"
    {
        console.log("01a."+let01_3)
        let let01_3="let02"  // variáveis com let não podem ser alteradas
        console.log("02a."+let01_3)
    }
    console.log("03a."+let01_3)
}

testVar_3()

console.log("Resultado do exemplo 3, não é possível redefinir o valor de variáveis declaradas com 'let'" )

