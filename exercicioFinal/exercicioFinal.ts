import { Cliente } from "./Cliente.js";
import { Pacote } from "./Pacote.js";
import { Transportadora } from "./Transportadora.js";


let cliente1:Cliente = new Cliente("Roberto",59,"123.456.789.54","SC",true)

console.log(cliente1.nome);
console.log(cliente1.idade);
console.log(cliente1.entregar);

let pacote1:Pacote = new Pacote("Camisetas",59.99)
console.log(pacote1.produto);
console.log(pacote1.preco);
console.log(pacote1.pacotao());
console.log(cliente1.dadosCliente());



let transporte1:Transportadora = new Transportadora("Olist Pax",53465689634,"Avenida Tamboré, 1180 – Barueri","SP",[pacote1],true)

console.log(transporte1.nome);
console.log(transporte1.endereco);
console.log(transporte1.estado);
console.log(transporte1.dadosTransportadora());










