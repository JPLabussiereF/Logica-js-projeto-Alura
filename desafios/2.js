// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// 2° Desafio: "Desafio: hora da prática"
// Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".
let diaSemana = prompt("Qual é o dia da semana?");
if(diaSemana == "Sábado"){
    alert("Bom fim de semana!");
} else if(diaSemana == "Domingo"){
    alert("Bom fim de semana!");
}else{
    alert("Boa Semana!");
}
// Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.
let numeroDigitado = prompt("Digite um número sem ser zero");
if(numeroDigitado < 0){
    alert("O número digitado é negativo");
} else if(numeroDigitado > 0){
    alert("O número digitado é positivo");
} else{
    alert("Erro :(");
}
// Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".
let pontuacao = 1000000;
if(pontuacao >= 100){
    alert("Parabéns, você venceu!");
}else{
    alert("Tente novamente para ganhar.");
}
// Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.
let saldoConta = 6000000;
    alert(`O saldo da sua conta é de "${saldoConta}" dolares`);
// Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.
let nomeInserido = prompt("Insira o seu nome através desse prompt!");
    alert(`Boas-vindas, ${nomeInserido}!!`);
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------