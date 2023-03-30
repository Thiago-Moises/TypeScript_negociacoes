import { view } from "./view.js";
export class NegociacoesView extends view {
    template(model) {
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
    formatar(data) {
        return new Intl.DateTimeFormat()
            .format(data);
    }
}
