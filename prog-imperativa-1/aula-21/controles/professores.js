// MODELOS
const CadastrarProfessor = require('../modelos/cadastrar');
const Professores = require('../modelos/listar');
const professores = new Professores();

//CONTROLES
const cadastrarProfessor = (requisicaoAoServidor, respostaDoServidor) => {
    const { nome, sobrenome } = requisicaoAoServidor.body;
    new CadastrarProfessor(nome, sobrenome);

    respostaDoServidor.render('resultado');
};

const retornarListaProfs = (_, respostaDoServidor) => respostaDoServidor.json(professores.listar())

const exibirListaProfs = (_, respostaDoServidor) => respostaDoServidor.render('cadastrar',{ professores: professores.listar() })

module.exports = {
    cadastrarProfessor,
    retornarListaProfs,
    exibirListaProfs
}