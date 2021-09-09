// MÉTODOS ARRAY

// API - Array + JSON

/*
Array.map();


var valoresNumericos = [1, 2, 3, 4, 4, 5, 6, 2];

var dobrarOsValores = valoresNumericos.map(function(item, indice, arrayOriginal) {
    //return `${indice} ${item} ${arrayOriginal}`;
    //return arrayOriginal;
    console.log(indice)
    return item * 2;
});

console.log(dobrarOsValores);

*/

var valoresNumericos = [1, 2, 3, 4, 4, 5, 6, 2, 12];

var filtrarValoresDuplicados = valoresNumericos.filter(function(item, indice, arrayOriginal){
    return arrayOriginal.indexOf(item) == indice;
});

var filtrarValor2 = valoresNumericos.filter(function(item){
    return item == 2
})

//console.log(filtrarValoresDuplicados);
//console.log(filtrarValor2);

var somarTodosOsValores = valoresNumericos.reduce(function(valorAcumulado, valorAtual, indiceAtual, arrayOriginal){
    return (valorAcumulado * valorAtual);
})

//console.log (somarTodosOsValores);


/// VÃO RETORNAR VALORES BOOLEANS - true / false
// every();
// some();
//find();
//includes();

var todosOsValoresSaoMaioresQueDez = valoresNumericos.filter(function(valor){
    return valor == 12;
})

var cardapioPizzas = ['Mussarela', 'Calabresa', 'Portuguesa', 'Maguerita'];

var buscarPizza = cardapioPizzas.includes(`calabresa`);

console.log(buscarPizza);

