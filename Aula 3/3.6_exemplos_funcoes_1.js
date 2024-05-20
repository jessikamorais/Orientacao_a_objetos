// Exemplo 1 - 01a_funcaoSemParametro
function funcaoSemRetorno() {
    console.log("Alô Mundo!");
}
 
function funcaoComReturn() {
    return "Alô Mundo!";
}

console.log("Função sem parâmetro e sem retorno: ")
funcaoSemRetorno()
console.log("Função sem parâmetro e com retorno: " + funcaoComReturn())
console.log("----------------------------------------------------------------- \n")

// Exemplo 2 - 01b_funcaoComParametro
function potencia(base, expoente = 2) {
    let resultado = 1;
    for (let cont = 0; cont < expoente; cont++) {
       resultado *= base;
    }
    return resultado;
 }
 console.log("Função com parâmetro, em que um destes tem um valor pre-fixado:")
 console.log(potencia());
 console.log(potencia(4));
 console.log(potencia(2,6));
 console.log(potencia(2,6,18));
 console.log("----------------------------------------------------------------- \n")


// Exemplo 3 - 02a_funcaoComoParametro
function decision(question, doOK, doCancel) {
    if (question=="OK") doOK()
    else doCancel();
}

function showOk() { console.log( "You agreed." ); }

function showCancel() { console.log( "You canceled the execution." ); }

console.log("Função como parametro, exemplos:" )
decision("OK", showOk, showCancel);
decision("Cancel", showOk, showCancel);
console.log("----------------------------------------------------------------- \n")

// Exemplo 4 - 02a_funcaoComoParametro
console.log("Função anônima como argumento, exemplos:" )
function decision(question, doOK, doCancel) {
    if (question=="OK") doOK()
    else doCancel();
}
decision(
    "OK", 
    function () { console.log( "You agreed." ); }, 
    function () { console.log( "You canceled the execution." ); }
);

decision(
    "Cancel", 
    function () { console.log( "You agreed." ); }, 
    function () { console.log( "You canceled the execution." ); }
);

console.log("-----------------------------------------------------------------\n")

// Exemplo 5 - 02c_funcaoComoParametro
console.log("Função atribuída a variável como argumento, exemplos:" )
function decision(question, doOK, doCancel) {
    if (question=="OK") doOK()
    else doCancel();
}

let beOK = function showOk() { console.log( "You agreed." ); }

let beCancel = function showCancel() { console.log( "You canceled the execution." ); }

decision("OK", beOK, beCancel);
decision("Cancel", beOK, beCancel);
console.log("-----------------------------------------------------------------\n")

// Exemplo 6 - 03a_closure
console.log("Função de Fechamento (closure) - Função que se lembra do ambiente em que foi criada:")
function somaValores(x) {
    return function(y) {
        return x + y;
    };
}

var soma5 = somaValores(5);

console.log(soma5(2));

console.log("-----------------------------------------------------------------\n")

// Exemplo 7 - 04a_arrow
console.log("Exemplos de funções de seta (arrow functions:")
console.log("-----------------------------------------------------------------\n")

var somar = () => console.log("Arrow function sem parametros")
somar()
somar(1)
console.log("-----------------------------------------------------------------\n")

somar = _ => console.log("Arrow function sem parametros, usando underscore")
somar()
console.log("-----------------------------------------------------------------\n")

somar = (x,y) => x + y;
console.log("Arrow function com parametros: " + somar(1,2));
console.log("-----------------------------------------------------------------\n")

somar = (x,y) => {return x + y};
console.log("Arrow function com parametro e uso do return (devido ao uso de chaves): " + somar(3,4));
console.log("-----------------------------------------------------------------\n")

// retorna o maior numero
somar = (x,y) => x>y?x:y;
console.log("Arrow function, operação ternária, retorna o maior número: " + somar(5,6));
console.log("-----------------------------------------------------------------\n")

somar = (x,y) => {
    if(x>y)
        return x
    else
        return y
}
console.log("Arrow function, repetição do exemplo anterior usando diferentes recursos e o return: " + somar(7,8));