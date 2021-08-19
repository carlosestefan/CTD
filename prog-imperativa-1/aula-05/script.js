var cotacaoDolarHoje = 5.3

function nomeInput(){
    var nome = prompt('Qual é o seu nome?'); 
    return nome
}

function dolaresInput(){
    var dolares = prompt('Quantos dólares você quer cotar?'); 
    return dolares
}

function result(){
    var resultado = dolares*cotacaoDolarHoje;
    return resultado
}

function alerta(mensagem){
    alert(mensagem + nome)
}

nomeInput();
dolaresInput();          
result();

alerta('olá, ');