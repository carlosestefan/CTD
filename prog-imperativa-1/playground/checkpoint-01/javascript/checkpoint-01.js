/*
Olá, você foi contratado para executar este projeto. É importante que você analise, entenda o pedido do cliente e desenvolva conforme solicitado. Veja abaixo os requisitos do projeto:

- Precisamos desenvolver um menu para um microondas super veloz, onde teremos 5 opções de comida com seus respectivos tempos pré-definidos. 

      1 - Pipoca – 10 segundos (padrão);
      2 - Macarrão – 8 segundos (padrão);
      3 - Carne – 15 segundos (padrão);
      4 - Feijão – 12 segundos (padrão);
      5 - Brigadeiro – 8 segundos (padrão); 

- O usuário poderá alterar o tempo padrão, aumentando ou diminuindo de acordo com sua vontade. Se o tempo informado for maior que 2x o necessário, exibir mensagem que a comida queimou.
- Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente"; 
- Opções não listadas no menu, devem exibir uma mensagem de erro: "Prato inexistente";
- Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir a mensagem: “kabumm”;
- No final de cada tarefa, o microondas deverá exibir a mensagem: "Prato pronto, bom apetite!!!".
*/

//var comidas = prompt('teste');




function prepararComida (){

    let comida = prompt('Selecione o prato que deseja preparar: 1 - Pipoca / 2 - Macarrão / 3 - Carne / 4 - Feijão / 5 - Brigadeiro ');
    let tempoPreparo = parseInt (prompt('Quantos segundos você deseja esquentar o prato?'));

    function processo (){
        if ((tempoPadrao <= tempoPreparo) && (tempoPreparo < (tempoPadrao * 2))) {
            alert('Prato pronto, bom apetite!');
        } else if (tempoPreparo < tempoPadrao){
            alert('Tempo insuficiente.');
        } else if (((tempoPadrao*2) <= tempoPreparo) && (tempoPreparo < (tempoPadrao * 3))){
            alert('Sua comida queimou! Tente novamente!');
        } else if ((tempoPadrao * 3) <= (tempoPreparo)){
            window.location.replace('explosao.html');
            //alert('KABUMM!');
        }
    }    
  
    if (comida === '1'){
        tempoPadrao = 10;
        processo();
        
    }else if (comida === '2'){
        tempoPadrao = 8;
        processo();
        
    }else if (comida === '3'){
        tempoPadrao = 15;
        processo();
        
    }else if (comida === '4'){
        tempoPadrao = 8;
        processo();
       
    }else if (comida === '5'){
        tempoPadrao = 12
        processo();
        
    }else {
        alert('Prato inexistente.');
    }

}

function voltarHome(){
    window.location.replace('index.html')
}



/*
function vezesDois () {
    let tempo = 1;
    let botaoMais2 = 2;
    return tempo += botaoMais2;
}

function vezesTres () {
    let tempo = 1;
    let botaoMais3 = 3;
    return tempo += botaoMais3;
}
*/



