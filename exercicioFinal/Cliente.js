import { Pessoa } from "./Pessoa.js";
export class Cliente extends Pessoa {
    constructor(nome, idade, cpf, estado, entregar) {
        super(nome, cpf, estado);
        this.idade = idade;
        this.cpf = cpf;
        this.entregar = entregar;
    }
    dadosCliente() {
        return `Nome: ${this.nome},idade: ${this.idade}, cpf: ${this.cpf}, estado: ${this.estado},Precisa entregar? ${this.entregar}`;
    }
}
