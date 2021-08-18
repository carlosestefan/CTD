// Comentário de uma única linha

/*
    Comentário de múltiplas linhas:
    Utilizado principalmente em documentações de código.
*/

var saudacao = 'Olá, ';
var nome = prompt('Qual é o seu nome');
alert(saudacao + nome + '!')

var dolar = parseFloat (prompt('Quantos dólares você quer cotar?'))
var cotacao = parseFloat (prompt('Qual a cotação do dólar hoje?'))

var real = dolar*cotacao

alert('US$ ' + dolar.toFixed(2) + ' valem R$ ' +  real.toFixed(2) + ' hoje.')

var senha = 8
var descubra = prompt('Para saber o nome dos integrantes do grupo, digite a senha (dica: Número do Grupo)')

while(senha !=descubra){
    alert('Tente novamente!')
    var descubra = prompt('Para saber o nome dos integrantes do grupo, digite a senha (dica: Número do Grupo)')
}

if (descubra == senha){
    alert('Integrantes do grupo 8: Bianca Moraes, Luan dos Santos, Doris Monteiro, Gilvane Noel, Nuno Martinho e Carlos Estefan')
}


/* 
INTEGRANTES DO GRUPO
Bianca Moraes
Luan dos Santos
Doris Monteiro do Nascimento
Gilvane Noel Ribeiro Oliveira
Nuno Martinho
Carlos Estefan
*/
