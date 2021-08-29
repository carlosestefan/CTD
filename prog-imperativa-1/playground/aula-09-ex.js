/*
//VERSÃO 1

const alturaUsuario = prompt('Qual a sua altura?');
const temAcompanhante = confirm('Você tem acompanhante?');

cumprePreRequisito(alturaUsuario, temAcompanhante);

function cumprePreRequisito (altura, preRequisitoTemAcompanhante) {

    let preRequisitoAltura = altura < 1.2 || altura >= 2;
    let preRequisitoAlturaComAcompanhante = altura <= 1.4 && altura >= 1.2;
    let preRequisitoAlturaSemAcompanhante = altura < 2 && altura > 1.4;

    if (preRequisitoAltura){

        alert('Acesso negado');
    } else if (preRequisitoAlturaComAcompanhante){

        if (preRequisitoTemAcompanhante){

            alert('Acesso autorizado.');
        }else {

            alert('Acesso negado.');
        }        
    } else if (preRequisitoAlturaSemAcompanhante){

        alert('Acesso autorizado.');
    }else {

        alert('Erro de sistema.');
    }

}
*/

/*
//VERSÃO 2

const alturaUsuario = prompt('Qual a sua altura?');
const temAcompanhante = confirm('Você tem acompanhante?');

cumprePreRequisito(alturaUsuario, temAcompanhante);

function cumprePreRequisito (altura, preRequisitoTemAcompanhante) {

    let preRequisitoAltura = altura < 1.2 || altura >= 2;
    let preRequisitoAlturaComAcompanhante = altura <= 1.4 && altura >= 1.2;
    let preRequisitoAlturaSemAcompanhante = altura < 2 && altura > 1.4;

    if (preRequisitoAltura){

        alert('Acesso negado');
    } else if (preRequisitoAlturaSemAcompanhante){

        alert('Acesso autorizado.');
    } else if (preRequisitoAlturaComAcompanhante && preRequisitoTemAcompanhante){

        alert('Acesso autorizado.');
               
    } else {

        alert('Acesso negado.');
    }

}

*/

//VERSÃO 3

const altura = prompt('Qual a sua altura?');
const acompanhante = confirm('Você tem acompanhante?');

function podeSubir (altura, acompanhante) {

    if ((altura < 1.2 && altura >= 2) && ((altura <= 1.4 && altura >= 1.2) && (acompanhante == false))){
        alert('Acesso negado.');
    } else if ((altura < 2 && altura > 1.4) || ((altura <= 1.4 && altura >= 1.2) && (acompanhante))){
        alert('Acesso permitido.');
    }else {
        alert('Acesso negado');
    }



}

podeSubir(altura, acompanhante);