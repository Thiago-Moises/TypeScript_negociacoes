import { Negociacao } from "./negociacao.js";

export class  Negociacoes {
    public negociacoes: Negociacao [] = [];

    adiciona(negociacao:Negociacao) {
        this.negociacoes.push(negociacao);
        
    }

    lista(): ReadonlyArray<Negociacao> {
        return this.negociacoes;

    }
}