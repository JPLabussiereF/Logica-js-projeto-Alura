// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// 3° Desafio: "Desafio: hora da prática"
// Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.
let contador1 = 1;
while(contador1 < 11){
    alert(`O seu contador está em ${contador1}`);
        contador1++;
}
// Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número.
let contador2 = 10;
while(contador2 > -1){
    alert(`O seu contador está em ${contador2}`);
        contador2--;
}
// Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.
let numeroContagem = prompt("Digite o número para a contagem regressiva ser inciada a parti dele.");
while(numeroContagem > 0){
    alert(`A contagem regressiva está em ${numeroContagem}.`);
    numeroContagem--;
}
alert(`A contagem regressiva chegou a 0, e terminou.`);
// Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.
let numeroContagemProg = prompt("Digite um número para a contagem progressiva ser inciada até ele.");
let contagemProg = 0;
while(contagemProg < numeroContagemProg){
    alert(`A contagem progressiva está em ${contagemProg}.`);
    contagemProg++
}
alert(`A contagem progressiva chegou ao seu numero`);
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------