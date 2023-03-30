export class Negociacao {
    
    constructor(
        private readonly data: Date, 
        private readonly quantidade: number, 
        private readonly valor: number
        ) {}

    get dataValue(): Date{
        return this.data;

    }

    get quantidadeValue(): number {
        return this.quantidade;
    }

    get valorValue(): number {
        return this.valor;

    }


    get volume(): number{
        return this.quantidade * this.valor;
    }

    public static criaDe (dataString: string, quantidadeString: string, valorString: string) {
        const exp = /-/g;
        const date = new Date (dataString.replace(exp, ','));
        const quantidade = parseInt(quantidadeString);
        const valor = parseFloat(valorString);
        return new Negociacao (date, quantidade, valor);
    }
}