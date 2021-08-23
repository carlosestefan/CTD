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

// 5. Valor/Hora de trabalho - OK
function valorHora (salario){
    return salario / 160
}

console.log(valorHora(6000));

// IMC - OK
function imc (peso, altura){
    return peso / (altura**2)
}

console.log(imc(90, 1.80));



