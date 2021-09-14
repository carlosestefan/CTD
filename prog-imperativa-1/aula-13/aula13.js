// JSON

let carro = {
    marca: 'Fiat',
    modelo: 'Palio',
    carroNome: function(){
        return `${carro.marca} ${carro.modelo}`;
    }
}

//console.log(carro.carroNome());

let api = JSON.stringify(carro);

//console.log(api);
//Não consegue acessar a propriedade

//console.log(api.marca);
// Não tem suporte para uso de funções

//console.log(typeof(api));
// É um tipo de texto


/// Converter JSON em Objeto Literal
let objetoLiteral = JSON.parse(api)

console.log(objetoLiteral)
console.log(objetoLiteral.marca)

// -----------------------------------------------------------------------------------------

//OBJETO LITERAL
    // Guardam múltiplos valores dentro da variável (atributos)
let professor = {
    nome: 'William',
    sobrenome: 'Sant Anna',
    nomeCompleto: function() {
        return `${this.nome} ${this.sobrenome}`; //this refere à variável dentro do objeto
    }
}

let aluno = {
    nome: "Carlos",
    sobrenome: "Estefan",
    nomeTodo: () => `${this.nome} ${this.sobrenome}`,
}

//console.log(professor.nomeCompleto());

//console.log(aluno.nome);
//console.log(aluno.nomeTodo());