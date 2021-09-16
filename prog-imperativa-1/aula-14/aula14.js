// AULA 14 - OBJETOS LITERAIS II


//Função Construtora (COMEÇA COM LETRA MAIÚSCULA)

    // Função anônima
    /*
    let Professor = function() {

    }
    */

    // Função declarada

    /*
function Professor(nome, sobrenome) {
    //atributos públicos
    this.nome = nome;
    this.sobrenome = sobrenome;

    //atributo privado
    let nomeCompletoII = `${nome} ${sobrenome}`

    //função pública
    this.nomeCompleto = function() {
        return `${this.nome} ${this.sobrenome}`; 
    }

    //função privada
    function nomeCompletoIII() {
        return `${this.nome} ${this.sobrenome}`
    }

}
*/

//importando módulo
let Professor = require(`./aula14-professor`)

    // Instância

let profImperativa = new Professor('Carlos', 'Estefan');
let profRoteiro = new Professor('Daniela', 'Nascimento');

console.log(profImperativa.nomeCompleto());
console.log(profRoteiro.nomeCompleto());


//MÓDULOS PARTE I


