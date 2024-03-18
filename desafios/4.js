// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// 4° Desafio: "Desafio: hora da prática"
// Crie um programa que utilize o console.log para exibir uma mensagem de boas-vindas.
console.log("Boas-vindas.");
// Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o console.log para exibir a mensagem "Olá, [seu nome]!" no console do navegador.
let nome = prompt("Digite o seu nome");
console.log(`Olá, ${nome}!`);
// Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o alert para exibir a mensagem "Olá, [seu nome]!" .
let nomeeSobrenome = prompt("Digite o seu nome e seu sobrenome");
alert(`Olá, ${nomeeSobrenome}!`);
// Utilize o prompt e faça a seguinte pergunta: Qual a linguagem de programação que você mais gosta?. Em seguida, armazene a resposta em uma variável e mostre no console do navegador.
let linguagemFavorita = prompt("Qual a linguagem de programação que você mais gosta?");
console.log(`A sua linguagem de programação favorita é o ${linguagemFavorita}, parabéns pela escolha!`);
// Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a soma desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A soma de [valor1] e [valor2] é igual a [resultado]." no console.
let valor1 = 5;
let valor2 = 10;
let resultado = valor1 + valor2;
console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultado}.`);
// Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a subtração desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A diferença entre [valor1] e [valor2] é igual a [resultado]." no console.
let valor3 = 5;
let valor4 = 10;
let resultado2 = valor3 - valor4;
console.log(`A diferença de ${valor3} e ${valor4} é igual a ${resultado2}.`);
// Peça ao usuário para inserir sua idade com prompt. Com base na idade inserida, utilize um if para verificar se a pessoa é maior ou menor de idade, exibindo uma mensagem apropriada no console.
let idadeInserida = prompt("Qual sua idade?");
if(idadeInserida >= 18){
    console.log("Você é maior de idade.");
}else{
    console.log("Você é menor de idade.");
}
// Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero. Use if-else para imprimir a respectiva mensagem.
let numeroAleatorio = prompt("Digite um número aleatório");
if(numeroAleatorio > 0){
    console.log("O número digitado é positivo.");
    alert("O número digitado é positivo.");
}else if( numeroAleatorio < 0){
    console.log("O número digitado é negativo.");
    alert("O número digitado é negativo.");
}else if(numeroAleatorio == 0){
    console.log("O número digitado é zero.");
    alert("O número digitado é zero.");
}else{
    console.log("Você não digitou um número.");
    alert("Você não digitou um número.");
}
// Use um loop while para imprimir os números de 1 a 10 no console.
let imprimirNumeros = 1;
while(imprimirNumeros < 11){
    console.log(imprimirNumeros);
    alert(imprimirNumeros);
    imprimirNumeros++
}
// Crie uma variável "nota" e atribua um valor numérico a ela. Use if-else para determinar se a nota é maior ou igual a 7 e exiba "Aprovado" ou "Reprovado" no console.
let nota = 10;
if(nota >= 7){
    console.log("Aprovado!");
}else{
    console.log("Reprovado!");
}
// Use o Math.random para gerar qualquer número aleatório e exiba esse número no console.
let qualquerNumero = Math.random()
    console.log(qualquerNumero);
// Use o Math.random para gerar um número inteiro entre 1 e 10 e exiba esse número no console.
let numero1a10 = parseInt(Math.random() * 10 + 1);
    console.log(numero1a10);
// Use o Math.random para gerar um número inteiro entre 1 e 1000 e exiba esse número no console.
let numero1a1000 = parseInt(Math.random() * 1000 + 1);
    console.log(numero1a1000);
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------