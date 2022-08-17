export class Pacote {
    constructor(produto, preco) {
        this.produto = produto;
        this.preco = preco;
    }
    pacotao() {
        return `O produto ${this.produto} custou ${this.preco}`;
    }
}
