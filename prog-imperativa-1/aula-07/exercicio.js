function calcularImc() {

    var pessoa = {
        nome: prompt('Qual é o seu nome?'),
        peso : parseFloat (prompt('Qual seu peso?')),
        altura : parseFloat (prompt('Qual sua Altura?')),
        imc : peso / (altura * altura),
        classificacao: ''
    }

   if (pessoa.imc < 18.5){
   pessoa.classificacao = 'Magreza';
    }else if (18.5 <= pessoa.imc <= 24.9){
        pessoa.classificacao = 'Normal';
   }else if (25 <= pessoa.imc <= 29.9){
    pessoa.classificacao = 'Sobrepeso';
    alert(`Olá, ${pessoa.nome}, seu IMC é ${pessoa.imc}, e sua classificação é de ${pessoa.classificacao}. Você precisa marcar uma consulta.`);
   }else if (30 <= pessoa.imc <= 30.9){
    pessoa.classificacao = 'Obesidade';
    alert(`teste`);
   }else {
    pessoa.classificacao = 'Obesidade Grave';
    alert(`teste`);
}

}