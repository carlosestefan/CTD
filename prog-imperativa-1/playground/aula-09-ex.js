/*
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


/*

acesso = 'Acesso autorizado somente com preRequisitoTemAcompanhante.'

function podeSubir (altura, preRequisitoTemAcompanhante, acesso) {


    altura = 1.7;
    preRequisitoTemAcompanhante = false;

    if ((altura < 1.2 && altura >= 2) || ((altura => 1.2 && altura <= 1.4) && (preRequisitoTemAcompanhante == false))){
        //(false && true) || ((true && true) && true)
        // false || true
        acesso = false;
        return acesso
    } else if ((altura < 2 && altura > 1.4) || ((altura => 1.2 && altura <= 1.4) && (preRequisitoTemAcompanhante == true))){
        acesso = true
        return acesso
    }else {
        acesso = false
        return acesso
    }



}

podeSubir();

*/




