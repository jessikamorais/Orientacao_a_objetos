//Exemplo 1 - 01a_var.js

function testVar_1(){
    var var01="var 01"
    {
        var var02="var 02"
        console.log("01a."+var01)
        console.log("01b."+var02)
    }
    console.log("02a."+var01)
    console.log("02b."+var02)
}

testVar_1()
console.log("Resultado do exemplo 1, declarando como 'var', a variável ficará ativa mesmo fora do bloco" )
console.log("----------------------------------------------------------------- \n")

//Exemplo 2 - 01b_var.js
function testVar_2(){
    var var01_2="var 01"
    if(1==0){
        var var02_2="var 02"
        console.log("01a."+var01_2)
        console.log("01b."+var02_2)
    }
    console.log("02a."+var01_2)
    console.log("02b."+var02_2)
}

testVar_2()
console.log("Resultado do exemplo 2, o valor da variável é declarado dentro de uma condição sempre inexistente" )
console.log("----------------------------------------------------------------- \n")

//Exemplo 2 - 01b_var.js
function testVar(){
    var var01_3="var 01"
    {
        console.log("01a."+var01_3)
        var var01_3="var 02"
        console.log("02a."+var01_3)
    }
    var var01_3="var 03"
    console.log("03a."+var01_3)
}
testVar()
console.log("Resultado do exemplo 3, é possível redefinir os valores de var" )


