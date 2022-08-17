export class Pacote{

    public produto:string
    public preco:number

constructor(produto:string,preco:number){

this.produto=produto
this.preco=preco

}

pacotao():string {

    return `O produto ${this.produto} custou ${this.preco}`
}

}