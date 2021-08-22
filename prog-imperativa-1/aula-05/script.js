var nome = prompt('Qual é o seu nome?'); 
var reais = prompt('Quantos dólares você quer cotar?'); 
var cotacao = 5.4


function result(){
    return reais*cotacao;
}

function alerta(){
    alert(`Olá, ${nome}! R$ ${reais} valem US$ ${result()} hoje.`)
}


alerta();