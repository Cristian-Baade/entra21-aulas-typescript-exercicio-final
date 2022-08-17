import { Pessoa } from "./Pessoa.js";
import { Pacote } from "./Pacote.js";

export class Transportadora extends Pessoa {

    public entregue: boolean
    public matricula: number
    private pacotes: Array<Pacote>


    constructor(nome: string, matricula: number, endereco: string, estado: string, pacotes: Array<Pacote>, entregue: boolean) {

        super(nome, endereco, estado)
        this.matricula = matricula
        this.pacotes = pacotes
        this.entregue = entregue
    }

    dadosTransportadora(): string {


        return `${this.nome} Matricula: ${this.matricula},Endereço: ${this.endereco}, Estado: ${this.estado}`
    }


}