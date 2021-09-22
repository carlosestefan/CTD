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

//exportando módulo
module.exports = Professor;