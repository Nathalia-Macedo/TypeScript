"use strict";
// Crie três variáveis para representar:
// Seu nome como string.
// Sua idade como number.
// Se você está estudando TypeScript como boolean.
let nome = "Nathalia";
let idade = 22;
let estudando = true;
// Crie duas variáveis chamadas a e b, ambas do tipo number.
// Atribua valores a elas e crie uma terceira variável chamada resultado que contenha a soma de a e b.
let a = 5;
let b = 7;
let resultado = a + b;
console.log(resultado);
// Declare uma variável que começa indefinida e depois atribua um valor nulo a ela.
let variavel;
variavel: null;
// Crie uma variável chamada quantidade com o valor 42 do tipo number.
// Converta essa variável para string usando dois métodos diferentes e exiba o resultado.
let quantidade = 42;
let quantidadeString = quantidade.toString();
let qtdString = String(quantidade);
console.log(quantidadeString);
console.log(qtdString);
// Crie uma variável chamada altura com o valor "1.75" do tipo string.
// Converta essa variável para number usando dois métodos diferentes e exiba o resultado.
let altura = '1.75';
let Altura = Number(altura);
let alturaConvertida = +altura;
console.log(Altura);
console.log(alturaConvertida);
// Crie uma variável chamada resposta com o valor "true" do tipo string.
// Converta essa variável para boolean e exiba o resultado.
let valor = 'true';
let valorConvertido = Boolean(valor);
console.log(valorConvertido);
// Crie variáveis com valores "falsy", como 0, "", null, undefined, e NaN.
// Converta cada uma delas para o tipo boolean usando Boolean() e exiba o resultado.
let valor1 = 'falsy';
let valor2 = 0;
let valor3 = null;
let valor4 = undefined;
let valor5 = NaN;
let NovoValor1 = Boolean(valor1);
let NovoValor2 = Boolean(valor2);
let NovoValor3 = Boolean(valor3);
let NovoValor4 = Boolean(valor4);
let NovoValor5 = Boolean(valor5);
console.log(`Valor1: ${NovoValor1}\n Valor2: ${NovoValor2},\n Valor3: ${NovoValor3}\n, Valor4: ${NovoValor4}\n Valor5: ${NovoValor5}`);
// Crie uma variável para o nome de uma linguagem de programação e outra para o ano atual, sem declarar os tipos explicitamente.
let linguagem = 'TypeScript';
let anoAtual = 2024;
console.log(`No ano de ${anoAtual} estou estudando ${linguagem}`);
