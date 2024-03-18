alert("Boas vindas ao jogo do número secreto!");
let numeroMaximo = 300;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentavivas = 1;

while(chute != numeroSecreto){

    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);

    if (chute == numeroSecreto){
        break;
    } else{
        if(chute > numeroSecreto){
            alert(`O número secreto é menor que ${chute}`);
        }else{
            alert(`O número secreto é maior que ${chute}`);
        }
        tentavivas++;
    }
}

let palavraTentativa = tentavivas > 1 ? "tentavivas" : "tentativa";                                     
alert(`Isso ai! Você acertou o número secreto ${numeroSecreto}, com ${tentavivas} ${palavraTentativa}.`);
// O código acima é o mesmo do código abaixo, mas o código acima é feito com um "operador tenário". Já o código abaixo é feito com If e Else
// if(tentavivas > 1){
//     alert(`Isso ai! Você acertou o número secreto ${numeroSecreto}, com ${tentavivas} tentativas.`);
// }else{
//     alert(`Isso ai! Você acertou o número secreto ${numeroSecreto}, com ${tentavivas} tentativa!`);
// }


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

// // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// // 2° Desafio: "Desafio: hora da prática"
// // Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".
// let diaSemana = prompt("Qual é o dia da semana?");
// if(diaSemana == "Sábado"){
//     alert("Bom fim de semana!");
// } else if(diaSemana == "Domingo"){
//     alert("Bom fim de semana!");
// }else{
//     alert("Boa Semana!");
// }
// // Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.
// let numeroDigitado = prompt("Digite um número sem ser zero");
// if(numeroDigitado < 0){
//     alert("O número digitado é negativo");
// } else if(numeroDigitado > 0){
//     alert("O número digitado é positivo");
// } else{
//     alert("Erro :(");
// }
// // Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".
// let pontuacao = 1000000;
// if(pontuacao >= 100){
//     alert("Parabéns, você venceu!");
// }else{
//     alert("Tente novamente para ganhar.");
// }
// // Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.
// let saldoConta = 6000000;
//     alert(`O saldo da sua conta é de "${saldoConta}" dolares`);
// // Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.
// let nomeInserido = prompt("Insira o seu nome através desse prompt!");
//     alert(`Boas-vindas, ${nomeInserido}!!`);
// // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// // 3° Desafio: "Desafio: hora da prática"
// // Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.
// let contador1 = 1;
// while(contador1 < 11){
//     alert(`O seu contador está em ${contador1}`);
//         contador1++;
// }
// // Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número.
// let contador2 = 10;
// while(contador2 > -1){
//     alert(`O seu contador está em ${contador2}`);
//         contador2--;
// }
// // Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.
// let numeroContagem = prompt("Digite o número para a contagem regressiva ser inciada a parti dele.");
// while(numeroContagem > 0){
//     alert(`A contagem regressiva está em ${numeroContagem}.`);
//     numeroContagem--;
// }
// alert(`A contagem regressiva chegou a 0, e terminou.`);
// // Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.
// let numeroContagemProg = prompt("Digite um número para a contagem progressiva ser inciada até ele.");
// let contagemProg = 0;
// while(contagemProg < numeroContagemProg){
//     alert(`A contagem progressiva está em ${contagemProg}.`);
//     contagemProg++
// }
// alert(`A contagem progressiva chegou ao seu numero`);
// // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// // 4° Desafio: "Desafio: hora da prática"
// // Crie um programa que utilize o console.log para exibir uma mensagem de boas-vindas.
// console.log("Boas-vindas.");
// // Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o console.log para exibir a mensagem "Olá, [seu nome]!" no console do navegador.
// let nome = prompt("Digite o seu nome");
// console.log(`Olá, ${nome}!`);
// // Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o alert para exibir a mensagem "Olá, [seu nome]!" .
// let nomeeSobrenome = prompt("Digite o seu nome e seu sobrenome");
// alert(`Olá, ${nomeeSobrenome}!`);
// // Utilize o prompt e faça a seguinte pergunta: Qual a linguagem de programação que você mais gosta?. Em seguida, armazene a resposta em uma variável e mostre no console do navegador.
// let linguagemFavorita = prompt("Qual a linguagem de programação que você mais gosta?");
// console.log(`A sua linguagem de programação favorita é o ${linguagemFavorita}, parabéns pela escolha!`);
// // Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a soma desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A soma de [valor1] e [valor2] é igual a [resultado]." no console.
// let valor1 = 5;
// let valor2 = 10;
// let resultado = valor1 + valor2;
// console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultado}.`);
// // Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a subtração desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A diferença entre [valor1] e [valor2] é igual a [resultado]." no console.
// let valor3 = 5;
// let valor4 = 10;
// let resultado2 = valor3 - valor4;
// console.log(`A diferença de ${valor3} e ${valor4} é igual a ${resultado2}.`);
// // Peça ao usuário para inserir sua idade com prompt. Com base na idade inserida, utilize um if para verificar se a pessoa é maior ou menor de idade, exibindo uma mensagem apropriada no console.
// let idadeInserida = prompt("Qual sua idade?");
// if(idadeInserida >= 18){
//     console.log("Você é maior de idade.");
// }else{
//     console.log("Você é menor de idade.");
// }
// // Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero. Use if-else para imprimir a respectiva mensagem.
// let numeroAleatorio = prompt("Digite um número aleatório");
// if(numeroAleatorio > 0){
//     console.log("O número digitado é positivo.");
//     alert("O número digitado é positivo.");
// }else if( numeroAleatorio < 0){
//     console.log("O número digitado é negativo.");
//     alert("O número digitado é negativo.");
// }else if(numeroAleatorio == 0){
//     console.log("O número digitado é zero.");
//     alert("O número digitado é zero.");
// }else{
//     console.log("Você não digitou um número.");
//     alert("Você não digitou um número.");
// }
// // Use um loop while para imprimir os números de 1 a 10 no console.
// let imprimirNumeros = 1;
// while(imprimirNumeros < 11){
//     console.log(imprimirNumeros);
//     alert(imprimirNumeros);
//     imprimirNumeros++
// }
// // Crie uma variável "nota" e atribua um valor numérico a ela. Use if-else para determinar se a nota é maior ou igual a 7 e exiba "Aprovado" ou "Reprovado" no console.
// let nota = 10;
// if(nota >= 7){
//     console.log("Aprovado!");
// }else{
//     console.log("Reprovado!");
// }
// // Use o Math.random para gerar qualquer número aleatório e exiba esse número no console.
// let qualquerNumero = Math.random()
//     console.log(qualquerNumero);
// // Use o Math.random para gerar um número inteiro entre 1 e 10 e exiba esse número no console.
// let numero1a10 = parseInt(Math.random() * 10 + 1);
//     console.log(numero1a10);
// // Use o Math.random para gerar um número inteiro entre 1 e 1000 e exiba esse número no console.
// let numero1a1000 = parseInt(Math.random() * 1000 + 1);
//     console.log(numero1a1000);
// // ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------