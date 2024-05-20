//Exemplo 8 - 05a_arraySome
array = [4,5,6,7,8,9,10]

regraImpar = (item) => item%2 != 0

console.log("Há algum número impar? "+ array.some(regraImpar))

regraPrimo = (item) => {
    let ndiv=0;
    for(let divisor=1; divisor<=item; divisor++)
      if((item%divisor)== 0)
        ndiv++
    
    if(ndiv==2) 
        return true
    else
        return false
}

console.log("Há algum número primo? "+ array.some(regraPrimo))

console.log("-----------------------------------------------------------------\n")

//Exemplo 9 - 05v_arrayEvery

regraImpar = (item) => item%2 != 0

console.log("Todos os números que são ímpares? "+ array.every(regraImpar))

regraPrimo = (item) => {
    let ndiv=0;
    for(let divisor=1; divisor<=item; divisor++)
      if((item%divisor)== 0)
        ndiv++
    
    if(ndiv==2) 
        return true
    else
        return false
}

console.log("Todos os número que são primos? "+ array.every(regraPrimo))

console.log("-----------------------------------------------------------------\n")

//Exemplo 10 - 05v_arrayEvery

regraImpar = (item) => item%2 != 0

console.log("Filtrar por número ímpares? "+ array.filter(regraImpar))

regraPrimo = (item) => {
    let ndiv=0;
    for(let divisor=1; divisor<=item; divisor++)
      if((item%divisor)== 0)
        ndiv++
    
    if(ndiv==2) 
        return true
    else
        return false
}

console.log("Filtrar por número primos? "+ array.filter(regraPrimo))
console.log("-----------------------------------------------------------------\n")

//Exemplo 11 - 05d_arrayForEach

array.forEach((nro) => console.log(nro+" -> "+ (nro%2==0?"par":"ímpar") ))

nroDivisores = (item) => {
    let ndiv=0;
    for(let divisor=1; divisor<=item; divisor++)
      if((item%divisor)== 0)
        ndiv++
    return ndiv;
}

array.forEach(
    (nro) => console.log(nro+
                        `-> nDivisores de 1 até ${nro} =`+
                         nroDivisores(nro) )
)

console.log("-----------------------------------------------------------------\n")

//Exemplo 12 - 05e_arrayReduce

let resultado = 
    array.reduce(
        (acc, val) => acc+=(val%2==0)?val:0, 
        0
    )

console.log("A soma dos nros pares é "+resultado)

console.log("-----------------------------------------------------------------\n")

//Exemplo 13 - 05f_arrayMap

var newArray = array.map( (item) => item*2 )
console.log(newArray)

newArray = array.map( (item) => {return {x: item, y: 2*item}} )
console.log(newArray)

console.log("-----------------------------------------------------------------\n")

//Exemplo 14 - 05g_arrayFilterMapForEach

array = [2,3,4,5,6,7,8,9,10]
nroDivisores = (item) => {
    let ndiv=0;
    for(let divisor=1; divisor<=item; divisor++)
      if((item%divisor)== 0)
        ndiv++
    return ndiv;
}

array
    .filter((nro) => nroDivisores(nro)==2)
    .map((item) => {return {x:item, par:(item%2)==0}} )
    .forEach((obj) => console.log(obj.x + " é par? " + obj.par))
