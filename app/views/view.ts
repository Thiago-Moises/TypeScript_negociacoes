export abstract class view<T> {

    protected elemento: HTMLElement;
    private escapar = false;

    constructor(selector: string, escapar: boolean) {
        this.elemento = document.querySelector(selector);

    }

    public update (model:T): void {
        let template = this.template(model);
        if (this.escapar) {
            template = template
            .replace(/<script>[\s\S]*?<\/script>/, '');
        }
        this.elemento.innerHTML = template;
    }


    protected abstract template(model:T): string;
}