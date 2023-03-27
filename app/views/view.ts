export class view {

    protected elemento: HTMLElement;

    constructor(selector: string) {
        this.elemento = document.querySelector(selector);

    }


}