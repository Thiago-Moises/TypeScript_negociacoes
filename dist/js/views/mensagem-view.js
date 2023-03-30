import { view } from "./view.js";
export class MensagemView extends view {
    template(model) {
        return `

            <p class="alert alert-info">${model}</P>
        `;
    }
}
