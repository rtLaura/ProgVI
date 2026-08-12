export class Pessoa {
    constructor(nome, idade, telefone, conta){
        this.nome = nome;
        this.idade = idade;
        this.telefone = telefone;
        this.conta = conta;
    }
}

let idade = 17;
verificarIdade(idade) {
    if (idade<18){
        throw "Não pode abrir a conta";
    }
}