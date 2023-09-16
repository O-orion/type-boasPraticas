import { NegociacoesDoDia } from "../interfaces/negociacaoDoDia.js";
import { Negociacao } from "../models/negociacao.js";

export class NegociacoesServices {
    public obterNegociacoes():Promise<Negociacao[]> {
       return fetch('http://localhost:8080/dados') // resposta assincrona
            .then(res => res.json() )
            .then((dados: NegociacoesDoDia[])  => {
                return dados.map((dado) => {
                    return new Negociacao(new Date(), dado.vezes, dado.montante)
                })
            } )
    
    }
}