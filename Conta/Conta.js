export class Conta {
    constructor(titular) {
        this.titular = titular;
        this.saldo = 0;
    }
    depositar(valor) {
        this.saldo += valor;
    }
    sacar(valor){
        this.saldo -= valor;
    }
    transferir(outraConta, valor){
        this.sacar(valor);
        outraConta.depositar(valor);
    }
}