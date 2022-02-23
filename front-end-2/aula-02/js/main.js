let vitoriasBot = 0;
let vitoriasJogador = 0;

verificaNumeroRodadas();

//verifica se a quantidade de rodade é menor que 2
function verificaNumeroRodadas() {
    while (vitoriasBot < 2 && vitoriasJogador < 2) {
        iniciar();
    };
};

//inicia o jogo
function iniciar() {
    let escolhaUsuario = parseInt(prompt('1- Papel, 2- Tesoura, 3- Pedra'));
    let escolhaBot = parseInt(Math.random() * 3 + 1);

//Compara a escolha do usuário com a do Bot    
    switch (escolhaUsuario) {

        case 1:
            papel()
            break;
        case 2:
            tesoura()
            break;
        case 3:
            pedra()
            break;
    };

 //Função se a escolha do usuário for papel  
    function papel() {
        switch (escolhaBot) {
            case 1:
                alert("EMPATOU");
                break;
            case 2:
                alert("Bot Ganhou !!!");
                vitoriasBot++;
                break;
            case 3:
                alert("Você Ganhou!!!");
                vitoriasJogador++;
                break;

        };
        console.log('Jogada do Usuário ' + escolhaUsuario)
        console.log('Jogada do Bot ' + escolhaBot)
    };
//Função se a escolha do usuário for tesoura
    function tesoura() {
        switch (escolhaBot) {
            case 2:
                alert("EMPATOU");
                break;
            case 3:
                alert("Bot Ganhou !!!");
                vitoriasBot++;
                break;
            case 1:
                alert("Você Ganhou!!!");
                vitoriasJogador++;
                break;

        };
        console.log('Jogada do Usuário ' + escolhaUsuario)
        console.log('Jogada do Bot ' + escolhaBot)
    };

//Função se a escolha do usuário for pedra
    function pedra() {
        switch (escolhaBot) {
            case 3:
                alert("EMPATOU");
                break;
            case 1:
                alert("Bot Ganhou !!!");
                vitoriasBot++;
                break;
            case 2:
                alert("Você Ganhou!!!");
                vitoriasJogador++;
                break;

        };
        console.log('Jogada do Usuário ' + escolhaUsuario)
        console.log('Jogada do Bot ' + escolhaBot)
    };


//Verifica quem ganhou as duas respostas e pergunta se o usuário quer jogar novamente
    if (vitoriasBot === 2) {
        if (confirm("Que pena você perdeu 2 rodadas! Quer jogar novamente?")) {
            vitoriasBot = 0;
            vitoriasJogador = 0;
            verificaNumeroRodadas();
        } else {
            alert("Que pena! Até a próxima!")
            window.close();
        };
    } if (vitoriasJogador === 2) {
        if (confirm("Parabéns você ganhou 2 rodadas! Quer jogar novamente?")) {
            vitoriasBot = 0;
            vitoriasJogador = 0;
            verificaNumeroRodadas();
        } else {
            alert("Que pena! Até a próxima!")
            window.close();
        };
    };

};





// let userChoices = parseInt(prompt('1 - Papel, 2 - Tesoura, 3 - Pedra'));
// let botChoice = parseInt(Math.random()*3+1)

// if(userChoices === 1) {

//   if(botChoice === 1) {
//     alert('Você escolheu Papel e o Bot escolheu Papel: Empate!')
//   };
//   if(botChoice === 2) {
//     alert('Você escolheu Papel e o Bot escolheu Tesoura: Você perdeu...')
//   };
//   if(botChoice === 3) {
//     alert('Você escolheu Papel e o Bot escolheu Pedra: Você ganhou!')
//   }

// }

// if(userChoices === 2) {

//   if(botChoice === 1) {
//     alert('Você escolheu Tesoura e o Bot escolheu Papel: Você ganhou!')
//   };
//   if(botChoice === 2) {
//     alert('Você escolheu Tesoura e o Bot escolheu Tesoura: Empate!')
//   };
//   if(botChoice === 3) {
//     alert('Você escolheu Tesoura e o Bot escolheu Pedra: Você perdeu...')
//   }

// }

// if(userChoices === 3) {

//   if(botChoice === 1) {
//     alert('Você escolheu Pedra e o Bot escolheu Papel: Você perdeu...')
//   };
//   if(botChoice === 2) {
//     alert('Você escolheu Pedra e o Bot escolheu Tesoura: Você ganhou!')
//   };
//   if(botChoice === 3) {
//     alert('Você escolheu Pedra e o Bot escolheu Pedra: Empate!')
//   }

// }


// console.log(userChoices)
// console.log(botChoice)