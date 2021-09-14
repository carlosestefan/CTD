/*
    Atividade I: Crie um Objeto Literal
    Vamos simular informações gerais de uma conta bancária. 
    Para isso deve-se basear nos seguintes recursos:
    (  ) Nome completo do usuário.
    (  ) Número da Agência.
    (  ) Número da Conta.
    (  ) Saldo Atual.
    (  ) Depósito.
    (  ) Saque.
*/

/*
    Atividade II: Adicione funcionalidades ao Objeto Literal.
    (  ) O usuário deve ser capaz de visualizar seu Saldo Atual.
    (  ) O usuário deve ser capaz de Depositar. Após o depósito o sistema deve informar o Saldo Atual atualizado.
    (  ) O usuário deve ser capaz de Sacar. Após o saque o sistema deve informar o Saldo Atual atualizado.
    (  ) O usuário não pode ser capaz de sacar mais do que possui de Saldo. se não possui saldo o sistema deve responder uma mensagem de erro.
    Sujestões de mensagem:
    - Agora seu Saldo Atual é de R$ X.
    - Você realizou um saque de R$ X. Agora seu Saldo Atual é de R$ X.
    - Saldo insuficiente! Seu Saldo Atual é de R$ ${this.saldoAtual}.
*/

/*
    Atividade III: Converta os valores em texto JSON
    (  ) Converta o resultado o objeto literal em JSON.
*/


// ATIVIDADE I 
let contaBancaria = {
    nomeCompleto: 'Carlos Estefan',
    numeroAgencia: 2411,
    numeroConta: 19841982,
    saldoAtual: 1500,

//ATIVIDADE II

    verificarSaldo: function(){
        return `Seu saldo é de R$ ${this.saldoAtual}`
    },
    deposito: function(valorDeposito){
        this.saldoAtual += valorDeposito
        return `Agora seu saldo atual é de R$ ${this.saldoAtual}`
    },
    saque: function(valorSaque){
        if (valorSaque <= this.saldoAtual){
            this.saldoAtual -= valorSaque
            return `Você realizou um saque de R$ ${valorSaque}. Agora seu saldo atual é R$ ${this.saldoAtual}`
        } else {
            return `Saldo insuficiente. Seu saldo atual é de R$ ${this.saldoAtual}`
        }
    }
}

console.log(contaBancaria.verificarSaldo());
console.log(contaBancaria.deposito(200));
console.log(contaBancaria.saque(100));


//ATIVIDADE III
let dadosConta = JSON.stringify(contaBancaria);
console.log(dadosConta);


/*

MESA DE TRABALHO - GRUPO SALA 3

Salomão Santos
Alan Menezes
Eduardo Ananias
Lucas Guimarães Aureliano
Kevin Jonathan
Paulo Alexandre da Silva
Carlos Estefan

*/