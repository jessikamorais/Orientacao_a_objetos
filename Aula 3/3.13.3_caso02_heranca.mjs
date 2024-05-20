//06a_Senha.mjs
//Cria um novo objeto que armazena em um "array" as placas de diferentes carros
import {Carro} from "./3.12.2_caso02_carro.mjs"

export class CarroComPlaca extends Carro{
    #_placa
    constructor(umaPlaca){
        super(55)
        this.#_placa=umaPlaca        
    }
    
    get placa(){
        return this.#_placa
    }
}