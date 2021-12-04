import { Pessoa } from "./Pessoa.js";
import { Cliente } from "./Cliente.js";

const pessoa = new Pessoa();
pessoa.nome = "Jorge";
pessoa.idade = 21;
pessoa.cpf = "123.456.789.10";

const cliente = new Cliente();
cliente.codigo = 112323;
cliente.nome = "Carlos";
cliente.numeCartaoCredito = 354454

console.log(pessoa)
console.log(cliente)



