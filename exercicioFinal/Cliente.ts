import { Pessoa } from "./Pessoa.js";

export class Cliente extends Pessoa {

    public idade: number
    public entregar: boolean
    public cpf: string


    constructor(nome: string, idade: number, cpf: string, estado: string, entregar: boolean) {
        super(nome, cpf, estado)
        this.idade = idade
        this.cpf=cpf
            this.entregar=entregar

    }

dadosCliente():string{

    return `Nome: ${this.nome},idade: ${this.idade}, cpf: ${this.cpf}, estado: ${this.estado},Precisa entregar? ${this.entregar}`

}

}