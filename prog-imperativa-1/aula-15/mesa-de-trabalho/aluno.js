/*
    Atividade I: Crie um controlador responsável por criar novos Alunos.
    O controlador deve ser capaz de:
    (X) Cadastrar um novo aluno com nome, sobrenome.
    (X) Validar se o nome e sobrenome do aluno é uma string e/ou não esta vazio.
    (X) Caso passe na validação:
        (X) Salvar o cadastro em um arquivo json.
    (X) Caso o contrário:
        (X) Recusar o Cadastro com uma mensagem de erro.
*/

const fs = require('fs');

function Aluno(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.nomeCompleto = function() {
        return `${this.nome} ${this.sobrenome}`; 
    }

    function saveDatabase() {
        if(validate()){
        const file = fs.readFileSync(__dirname + `/database.json`, `utf-8`);
        const litObject = JSON.parse(file);
        litObject.push({nome, sobrenome});
        const txtFile = JSON.stringify(litObject);
        fs.writeFileSync(__dirname + `/database.json`, txtFile);
        } else {
            console.log(`Não é um nome válido`);
        }
    }

    function validate(){
        let notEmpty = (nome && sobrenome);
        let isString = (typeof(nome) == 'string' && typeof(sobrenome) == 'string')

        return (notEmpty && isString)
    }

    saveDatabase();
}

let alunoCTD = new Aluno('Carlos', 'Estefan');

module.exports = Aluno;