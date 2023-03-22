export class Negociacao {
    constructor(data, quantidade, valor) {
        this.data = data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    get dataValue() {
        return this.data;
    }
    get quantidadeValue() {
        return this.quantidade;
    }
    get valorValue() {
        return this.valor;
    }
    get volume() {
        return this.quantidade * this.valor;
    }
}
