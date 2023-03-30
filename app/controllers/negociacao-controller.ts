import { DiasDaSemana } from "../enums/dias-da-semana.js";
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";

export class NegociacaoController {
    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private negociacoes = new Negociacoes (); 
    private negociacoesView = new NegociacoesView('#negociacoesView',true);
    private mensagemView = new MensagemView('#mensagemView', false);
    
    
    constructor() {
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
        this.negociacoesView.update(this.negociacoes);
    }

    public adciona(): void {
        const negociacao = Negociacao.criaDe (
        this.inputData.value,
        this.inputQuantidade.value,
        this.inputValor.value
        );
        if(this.ehDiaUtil) {
        this.negociacoes.adiciona(negociacao);
        this.limparFormulario();
        this.atualizaView();
        } else {
            this.mensagemView.update('Apenas negociações em dia úteis são aceitas');
        }
        //Negocia  
    }

    private ehDiaUtil(data: Date):boolean {
        console.log(data)
        return data.getDay() > DiasDaSemana.DOMINGO &&
         data.getDay() < DiasDaSemana.SABADO;
    }



    private criaNegociacao(): Negociacao {
        const exp = /-/g;
        const date = new Date (this.inputData.value.replace(exp, ','));
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);
        return new Negociacao (date, quantidade, valor);
    }

    private limparFormulario (): void {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value ='';
        this.inputData.focus();

    } 

    private atualizaView(): void {
        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update('Negociação adicionada com sucesso!');
    }
}