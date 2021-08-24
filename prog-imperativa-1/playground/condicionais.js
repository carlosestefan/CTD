// CONDICIONAIS

/*
let dia;
dia = "segunda";

if(dia == "domingo"){
    console.log("Vou passear na praia!")
} else if(dia == "sexta"){
    console.log("Vou para o cinema!")
}

else{
    console.log("Vou trabalhar...")
}

*/

// -------------------------------------------------

let idade;
idade = 15;
let acesso = '';
if (idade < 16){
    acesso = 'Acesso negado';
}else if (idade >= 16 & idade <= 18) {
    acesso = 'Acesso liberado somente com acompanhante maior de idade'
}else {
    acesso = 'Acesso liberado'
}

//console.log(acesso);

// ------------------------------------------------

// If Ternário

let dia = 'quarta';
let resultado = dia == "domingo" ? 'Vou descansar' : "Vou trabalhar";

//console.log(resultado);

switch(dia){
    case "segunda" :
        console.log("Vou tomar café");
        break;
    case "sexta" :
        console.log("Vou no cinema")
        break;
    default :
        console.log("Não vou fazer nada")
}
