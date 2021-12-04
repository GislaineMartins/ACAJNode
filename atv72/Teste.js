import { PessoaFisica } from "./PessoaFisica.js";
import { PessoaJuridica } from "./PessoaJuridica.js";

const pf = new PessoaFisica(1234567);
pf.nome = "pf";
pf.sobrenome = "pessoa fisica";
pf.idade = 21;

const pj = new PessoaJuridica(1111111111);
pj.nome = "pj";
pj.sobrenome = "pessoa juridica";
pj.idade = 22;

console.log(pf);
console.log(pj);