// CONST não pode ser atribuído outro valor ou acessada fora do bloco
//Exemplo 1 - 03a_const.js
function testConst(){
    const const01="const01"
    {
        const const02="const02"
        console.log("01a."+const01)
        console.log("01b."+const02)
    }
    // const01= "novo valor"
    // console.log("02a."+const01)
    // console.log("02b."+const02)
}

testConst()

console.log("Resultado do exemplo 1, não é possível atribuir um novo valor para 'const' " )
console.log("----------------------------------------------------------------- \n")

//Exemplo 2 - 03b_const.js
function testConst2(){
    const const01_2={propriedade: "valor"}
    console.log("01a."+const01_2.propriedade)

    const01_2.propriedade = "novo valor"
    console.log("02a."+const01_2.propriedade)
}

testConst2()

console.log("Resultado do exemplo 2, é possível alterar a propriedade de um objetido declarado com 'const'" )
console.log("-----------------------------------------------------------------  \n")

//Exemplo 3 - 03c_const.js
function testConst3(){
    const const01_3={propriedade: "valor"}
    console.log("01a."+const01_3.propriedade)

    const01_3 = {propriedade: "novo valor"}
    console.log("02a."+const01_3.propriedade)
}
console.log("Resultado do exemplo 3, não é possível alterar o valor do objeto" )
