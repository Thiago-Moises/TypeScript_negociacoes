import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { view } from "./view.js";

export class NegociacoesView extends view <Negociacoes>{

    protected template(model:Negociacoes): string {

        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA></th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>

                </tr>
            </thead>
            <tbody>
                ${model.lista().map(negociacao => {
                    return `

                        <tr>
                            <td>${this.formatar(negociacao.dataValue)}</td>
                            <td>${negociacao.quantidadeValue}</td>
                            <td>${negociacao.valorValue}</td>

                        </tr>
                    `;
                    
                }).join('')}
            </tbody>
        </table>
        `;

    }

    public formatar(data: Date): string {

        return new Intl.DateTimeFormat()
        .format(data);
    }
}