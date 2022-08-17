import { Pessoa } from "./Pessoa.js";
export class Transportadora extends Pessoa {
    constructor(nome, matricula, endereco, estado, pacotes, entregue) {
        super(nome, endereco, estado);
        this.matricula = matricula;
        this.pacotes = pacotes;
        this.entregue = entregue;
    }
    dadosTransportadora() {
        return `${this.nome} Matricula: ${this.matricula},Endereço: ${this.endereco}, Estado: ${this.estado}`;
    }
}
