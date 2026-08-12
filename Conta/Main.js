import { Conta } from "./Conta.js";
import { Pessoa } from "./Pessoa.js";

let p1 = new Pessoa("Laura", 18, "499999-9999");
let p2 = new Pessoa("Oliver", 3, "881234-5678");

try {
    let c1 = new Conta(p1);
    c1.depositar(2);
} catch (error) {
    console.error(error);
}

try {
    let c2 = new Conta(p2);
    c2.depositar(5000);
    c2.transferir(c1, 1600);

    console.log("Titular: " + c1.pessoa + " - Saldo: R$" + c1.saldo);
    console.log("Titular: " + c2.pessoa + " - Saldo: R$" + c2.saldo);
} catch (error) {
    console.error(error);
}

