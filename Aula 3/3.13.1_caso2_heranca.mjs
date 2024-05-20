//Exemplo 3.13.1
//Consumidor, que utiliza dois objetos, um com herança (abastecimento) e outro criado para o exemplo (placa)
import { CarroComPlaca } from "./3.13.3_caso02_heranca.mjs"
import {Locadora} from "./3.13.2_caso02_heranca.mjs"

var locadora = new Locadora()
locadora.adicionaCarro(new CarroComPlaca("ABC-9I23"))
locadora.adicionaCarro(new CarroComPlaca("DEF-0U74"))

locadora.consultaCarros()

locadora.abasteceCarro(0, 30)
locadora.consultaCarros()

locadora.abasteceCarro(1, 30)
locadora.consultaCarros()

locadora.abasteceCarro(0, 30)
locadora.consultaCarros()