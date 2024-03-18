alert("Boas vindas ao jogo do número secreto!");
let numeroSecreto = 4;
console.log(numeroSecreto);
let chute = prompt("Escolha um número entre 1 e 10");

if (chute == numeroSecreto){
    alert(`Isso ai! Você acertou o número secreto (${numeroSecreto})`);
} else{
    alert("Você errou :(");
}

// // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// // 1° Desafio: "Desafio: hora da prática"
// // Mostre um alerta com a mensagem "Boas vindas ao nosso site!".
// alert("Boas vindas ao nosso site!");
// // Declare uma variável chamada nome e atribua a ela o valor "Lua".
// let nome = "Lua";
// // Crie uma variável chamada idade e atribua a ela o valor 25.
// let idade = 25;
// // Defina uma variável numeroDeVendas e atribua a ela o valor 50.
// let numeroDeVendas = 50;
// // Defina uma variável saldoDisponivel e atribua a ela o valor 1000.
// let saldoDisponivel = 1000;
// // Exiba um alerta com o texto "Erro! Preencha todos os campos"
// alert("Erro! Preencha todos os campos");
// // Declare uma variável chamada mensagemDeErro e atribua a ela o valor "Erro! Preencha todos os campos" Agora exiba um alerta com o valor da variável mensagemDeErro.
// let mensagemDeErro = "Erro! Preencha todos os campos";
// alert(mensagemDeErro);
// // Use um prompt para perguntar o nome do usuário e armazená-lo na variável nome.
// let nomeUsuario = prompt("Qual o nome do usuário?");
// // Peça ao usuário para digitar sua idade usando um prompt e armazene-a na variável idade.
// let idadeUsuario = prompt("Qual a sua idade?");
// // Agora, caso a idade seja maior ou igual que 18, exiba um alerta com a mensagem "Pode tirar a habilitação!".
// if (idadeUsuario >= 18){
//     alert("Pode tirar a habilitação!");
// }
// // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

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
