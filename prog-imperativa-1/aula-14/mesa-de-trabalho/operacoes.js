let ContaBancaria = require(`./conta-bancaria`);

let contaFinal = new ContaBancaria('Carlos Estefan', 2411, 19841982, 1500);

let operacoes = {
    verificarSaldo: function(){
        return `Seu saldo é de R$ ${contaFinal.saldoAtual}`
    },
    deposito: function(valorDeposito){
        contaFinal.saldoAtual += valorDeposito
        return `Agora seu saldo atual é de R$ ${contaFinal.saldoAtual}`
    },
    saque: function(valorSaque){
        if (valorSaque <= contaFinal.saldoAtual){
            contaFinal.saldoAtual -= valorSaque
            return `Você realizou um saque de R$ ${valorSaque}. Agora seu saldo atual é R$ ${contaFinal.saldoAtual}`
        } else {
            return `Saldo insuficiente. Seu saldo atual é de R$ ${saldoAtual}`
        }
    }
}



console.log(operacoes.deposito(300));
console.log(operacoes.saque(100));