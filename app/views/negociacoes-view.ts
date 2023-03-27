import { Negociacao } from "../models/negociacao";
import { Negociacoes } from "../models/negociacoes.js";
import { view } from "./view.js";

export class NegociacoesView extends view {

        
    template(model:Negociacoes): string {

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
                            <td>${new Intl.DateTimeFormat().format (negociacao.dataValue)}</td>
                            <td>${negociacao.quantidadeValue}</td>
                            <td>${negociacao.valorValue}</td>

                        </tr>
                    `;
                    
                }).join('')}
            </tbody>
        </table>
        `;

    }

    update(model: Negociacoes): void {
        const template = this.template(model);
        console.log(template);
        this.elemento.innerHTML = template;
    }
}