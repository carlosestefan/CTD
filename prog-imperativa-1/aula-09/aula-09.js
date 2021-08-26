var numbers = [ 1, 3, 5, 7, 9];

//Primeira forma (função dentro do map)
var numbersCopy = numbers.map (function (valor, indice, valorOriginal){
    return (indice);
})


//Array .filter ();
//Remove e retorna os elementos indesejados combase em uma condição
var biggerThanFive = numbers.filter (function(valor){
    return valor > 5;
})


//Array .every ();
//Retorna se todos os elementos de uma array são aprovados na condição
var smallerThanTen = numbers.every(function(valor){
    return valor < 10
})

//Array .some ();
//Retorna se pelo menos um elemento de uma array for aprovado na condição

var smallerThanFife = numbers.some(function(valor){
    return valor < 5
})

// Segunda forma
// Retorna os valores duplicados
// 1. Função que retornará o valor alterado
function double(valor) {
    return valor * 2
}


console.log(numbersCopy);