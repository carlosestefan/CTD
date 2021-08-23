/*
FUNÇÃO EXPRESSA
Aquela que se atribui como valor à uma variável

let somar = function() {

}

-----------------------------------------------
FUNÇÃO DECLARADA
Recebe um nome formal e não se atribui para uma variável

function somar(){

}

-----------------------------------------------

function dobro(numero){
    //código a executar
    return numero * 2
}

dobro(6);

function saudar(){
    console.log("Fala aí!")
}

saudar();

let somar = function(){
    let a = 1
    let b = 2
    console.log(a+b)
}

somar();

*/

function nomeCompleto (nome = prompt("Digite seu nome"), sobrenome = prompt("Digite seu Sobrenome")){
    return (`${nome} ${sobrenome}`)
}

function imc (peso = prompt("Digite seu Peso (em kilos - ex: 90.5)"), altura = prompt("Digite sua altura (use pontos - ex: 1.83)")){
    return(peso / (altura**2))
}


alert(`Olá, ${nomeCompleto()}! Seu IMC é ${imc()}.`)