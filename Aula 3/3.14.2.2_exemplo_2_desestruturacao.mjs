//Exemplo 3.14.2.2 - 02a_Objeto.js
export class UmaClasse{
    #_umAtributo
    outroAtributo = "atributo dois"

    constructor(n){
        this.#_umAtributo = n
    }

    capturaPrimeiroAtributo(){
        return this.#_umAtributo
    }
}