import { view } from "./view.js";

export class MensagemView extends view<string> {

    protected template (model: string): string {
        return `

            <p class="alert alert-info">${model}</P>
        `
    }
}