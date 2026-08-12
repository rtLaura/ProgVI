import { Conta } from "./Conta.js";

let c1 = new Conta("Laura");
let c2 = new Conta("Oliver");

c1.depositar(2);
c2.depositar(999);

c1.transferir(c1, 1);

console.log("Titular: " + c1.titular + " - Saldo: R$" + c1.saldo)
console.log("Titular: " + c2.titular + " - Saldo: R$" + c2.saldo)