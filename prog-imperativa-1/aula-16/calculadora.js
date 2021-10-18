// AULA 16 - Arrow function, Callback e Javadoc

/*
function temIdadeParaBeber(idade) {
    let idadeMinima = 18;
    return idade >= 18;
}

var temIdadeParaBeber = function(idade) {
    let idadeMinima = 18;
    return idade >= 18;
}

*/

    // ARROW FUNCTIONS são anônimas
    // Não possui seu próprio THIS.


/*
let temIdadeParaBeber = idade => idade >= 18; //se tiver mais de 1 parâmetro ou mais de 1 linha, usar chaves

temIdadeParaBeber(16); //true or false

console.log(temIdadeParaBeber(16));

let valorAleatorio = () => Math.random();

console.log(valorAleatorio());
*/

// CALLBACK

/**
 * FUNÇÃO RESPONSÁVEL POR CALCULAR COM BASE NA OPERAÇÃO ENVIADA PELO CALLBACK;
 * 
 * @param {number[]} valores Valores que deseja calcular
 * @param {(valores: number[]) => number} operacoes Função callback responsável pelo cálculo
 * @returns Retorna um valor numérico
 */

function calculadora(valores, operacoes) {
     return operacoes(valores);
}

function somar(valores) {
     var resultado = valores.reduce((valorAcumulado, valorInicial) => valorAcumulado + valorInicial);
     return resultado;
}

function multiplicar(valores) {
    var resultado = valores.reduce((valorAcumulado, valorInicial) => valorAcumulado * valorInicial);
    return resultado;
}

function subtrair(valores) {
    var resultado = valores.reduce((valorAcumulado, valorInicial) => valorAcumulado - valorInicial);
    return resultado;
}

function dividir(valores) {
    var resultado = valores.reduce((valorAcumulado, valorInicial) => valorAcumulado / valorInicial);
    return resultado;
}


console.log(calculadora([2,2], somar));
console.log(calculadora([2,1], subtrair));
console.log(calculadora([2,2], multiplicar));
console.log(calculadora([2,2], dividir));