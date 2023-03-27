import { view } from "./view.js";

export class MensagemView extends view {

    template (model: string): string {
        return `

            <p class="alert alert-info">${model}</P>
        `


    }

    update (model: string): void {
        const template = this.template(model);
        this.elemento.innerHTML = template;
    }
}