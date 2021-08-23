//1. POLEGADAS EM CM - OK
function medida(polegada){   
    return 2.54 * polegada
}

console.log(medida (2));


//2. STRING PARA URL - OK
function fazerUrl(url1){
    return new URL ('https://' + url1 + '.com')
}

console.log(fazerUrl("carlosestefan"));

//3. STRING COM EXCLAMAÇÃO - OK
function exclamar(frase){
    return frase + "!"
}

console.log(exclamar("Olá, galera"));

//4. Idade de cães - OK
function idadeCao (idade){
    return idade * 7
}

console.log(idadeCao(4));

//5. Valor/Hora de trabalho - OK
function valorHora (salario){
    return salario / 160
}

console.log(valorHora(6000));

//6. IMC - OK
function imc (peso, altura){
    return peso / (altura**2)
}

console.log(imc(90, 1.80));

//7. Calculadora - Nível 1
function somar(a, b){
    return a + b
}

function subtrair(a, b){
    return a - b
}

function multiplicar(a, b){
    return a * b
}

function dividir(a, b){
    return a / b
}

function quadrado(a){
    return (multiplicar(a, a))
}

function media (a, b, c){
    return (a + b + c) / 3
}

function porcentagem (a, b){
    return a * (b/100)
}

console.log(somar(10, 1));

console.log(dividir(10, 0));

console.log(quadrado(3));

console.log(media(7, 10, 5));

console.log(porcentagem(40, 50))



