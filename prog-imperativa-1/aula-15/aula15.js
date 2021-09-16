// AULA 15 - MÓDULOS 2

    // readFileSync = ler arquivo (se tiver dentro da variável ele vira ela)
    // writeFileSync = sobrescreve o arquivo (apaga o que tem dentro e reescreve o valor)
    // __dirname = o endereço da raiz do projeto


//Importar módulo File System
var fs = require('fs');

function Professor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.nomeCompleto = function() {
        return `${this.nome} ${this.sobrenome}`; 
    }

    function saveDatabase() {
        // 1. Ler o arquivo e guardar
        let file = fs.readFileSync(__dirname + `/database.json`, `utf-8`);
        // 2. Converter o arquivo de texto em objeto literal
        let litObject = JSON.parse(file);
        // 3. Adicionar o valor em um Array
        litObject.push({nome, sobrenome});
        console.log(litObject);
        // 4. Converter o objeto literal em texto
        let txtFile = JSON.stringify(litObject);
        console.log(txtFile);
        // 5. Salvar resultado em texto no arquivo
        fs.writeFileSync(__dirname + `/database.json`, txtFile);
    }

    saveDatabase();
}

let profImperativa = new Professor('Carlos', 'Estefan');

//exportando módulo

module.exports = Professor; 