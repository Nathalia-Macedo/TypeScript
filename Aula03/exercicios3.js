"use strict";
// Crie um array de números inteiros que represente as idades de um grupo de pessoas. Adicione uma nova idade ao array e, em seguida, exiba a média das idades.
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
let idades = [12, 9, 22, 38, 46, 15];
idades.push(50);
let soma = 0;
for (let i = 0; i < idades.length; i++) {
    soma += i;
}
let media = soma / idades.length;
console.log(`A média das idades é de ${media.toFixed(2)}`);
// Crie uma tuple que armazene as seguintes informações de um produto: nome do produto (string), preço (número), e quantidade em estoque (número). Em seguida, exiba as informações no console.
let produto = ["Café", 10.00, 5];
console.log(`Nome do produto: ${produto[0]}\nPreço do ${produto[0]}: ${produto[1]}\nQuantidade de ${produto[0]} em estoque: ${produto[2]}`);
// Crie um enum que represente as quatro estações do ano: Primavera, Verão, Outono e Inverno. Crie uma função que recebe uma estação do ano como argumento e exiba uma mensagem com a estação escolhida.
var Estações;
(function (Estações) {
    Estações["Primavera"] = "primavera";
    Estações["Ver\u00E3o"] = "ver\u00E3o";
    Estações["Inverno"] = "inverno";
    Estações["Outono"] = "outono";
})(Estações || (Estações = {}));
function mensagemEstacao(estacao) {
    console.log(`Estamos na estação ${estacao}`);
}
mensagemEstacao(Estações.Primavera);
// Crie uma função que receba o nome de uma pessoa e exiba uma saudação no console, sem retornar nenhum valor. Use o tipo void para essa função.
function saudacao(nome) {
    console.log(`Olá ${nome}, bem vindo(a)`);
}
saudacao("Nathalia");
// Crie uma variável que possa armazenar um número ou null. Inicialmente, atribua null a essa variável. Depois, altere o valor dela para um número e exiba no console.
let valor;
valor: null;
valor = 5;
let Coordenadas = [];
function AdicionarCoordenada(x, y) {
    Coordenadas.push([x, y]);
}
AdicionarCoordenada(10, 5);
console.log(Coordenadas);
// Crie um array de strings que armazene os nomes dos seus filmes favoritos. Em
// seguida, adicione mais um filme à lista.
let filmes = ['Velozes e Furiosos', 'Peter Pan', "Uma Garota Encantada"];
filmes.push('Como Treinar o Seu Dragão');
console.log(filmes);
// Defina uma tuple que contenha seu nome (string), idade (número) e se você é
// estudante (booleano).
let informacoes = ['Nathalia', 22, true];
// Escreva uma função que recebe um array de números e retorna a soma de todos os números no array.
function somaDosElementos(lista) {
    let contador = 0;
    for (let i of lista) {
        contador += i;
    }
    return `A soma de todos os elementos da lista é ${contador}`;
}
console.log(somaDosElementos([1, 2, 3, 4, 5]));
// Escreva uma função que utiliza um enum para representar os dias da semana. A função deve receber um dia (como enum) e exibir uma mensagem específica para cada dia.
var DiasDaSemana;
(function (DiasDaSemana) {
    DiasDaSemana[DiasDaSemana["Segunda"] = 0] = "Segunda";
    DiasDaSemana[DiasDaSemana["Terca"] = 1] = "Terca";
    DiasDaSemana[DiasDaSemana["Quarta"] = 2] = "Quarta";
    DiasDaSemana[DiasDaSemana["Quinta"] = 3] = "Quinta";
    DiasDaSemana[DiasDaSemana["Sexta"] = 4] = "Sexta";
    DiasDaSemana[DiasDaSemana["Sabado"] = 5] = "Sabado";
    DiasDaSemana[DiasDaSemana["Domingo"] = 6] = "Domingo";
})(DiasDaSemana || (DiasDaSemana = {}));
function MensagemDoDia(dia) {
    switch (dia) {
        case DiasDaSemana.Segunda:
            console.log('Início de semana!');
            break;
        case DiasDaSemana.Terca:
            console.log('O dia da semana que demora de passar');
            break;
        case DiasDaSemana.Quarta:
            console.log('Dia de Fitdance duplo na Smart Fit');
            break;
        case DiasDaSemana.Quinta:
            console.log('Dia da turma mais legal');
            break;
        case DiasDaSemana.Sexta:
            console.log(' O dia mais esperado!');
            break;
        case DiasDaSemana.Sabado:
            console.log('Passa Voando');
            break;
        case DiasDaSemana.Domingo:
            console.log('Piscou, acabou!');
            break;
    }
}
MensagemDoDia(DiasDaSemana.Domingo);
let MeusDados = ['Nath', 22];
function saudacaoPersonalizada(dados) {
    return `Bem vinda ${dados[0]} já fez ${dados[1]} Menina?`;
}
console.log(saudacaoPersonalizada(MeusDados));
// Crie uma função que retorna um valor void, apenas exibindo uma mensagem no console.
function mensagemNoConsole() {
    console.log("Apenas exibir uma mensagem no console!");
}
mensagemNoConsole();
function respostas(x, y) {
    let soma = x + y;
    let subtracao = x - y;
    let saidas = [soma, subtracao];
    return saidas;
}
console.log(respostas(5, 7));
// Escreva uma função com parâmetros opcionais, que recebe uma string e um número (opcional). Se o número for passado, a função deve repetir a string esse número de vezes, caso contrário, apenas exibir a string uma vez.
function repeticao(texto, numero) {
    if (numero) {
        for (let i = 0; i <= numero; i++) {
            console.log(texto);
        }
    }
    else {
        console.log(texto);
    }
}
repeticao("repetindo", 5);
// Defina uma função que recebe um array de números e retorna o maior valor contido no array.
let numeros = [1, 12, 34, 28, 90, 56];
function maiorDoArray(lista) {
    lista.sort((a, b) => a - b);
    let ultima_posicao = lista.length;
    let ultimo_item = lista[ultima_posicao - 1];
    return ultimo_item;
}
console.log(maiorDoArray(numeros));
// Defina uma função que recebe um array de strings e retorna a string com mais caracteres.
let strings = ['Nathalia', "Gigi", "Luísa", "Pantene", "Lucas"];
function maiorString(lista) {
    let maior = '';
    for (let nome of lista) {
        if (nome.length > maior.length) {
            maior = nome;
        }
    }
    return maior;
}
console.log(maiorString(strings));
// Defina uma função genérica que recebe dois parâmetros e retorna o segundo parâmetro, independentemente do tipo.
function retornarValor(valor1, valor2) {
    return valor2;
}
console.log(retornarValor(4, 8));
// Crie uma função assíncrona que faz uma requisição para uma API de exemplo e retorna os dados obtidos.
function requisicao() {
    return __awaiter(this, void 0, void 0, function* () {
        return fetch("https://viacep.com.br/ws/01001000/json/")
            .then(response => response.json())
            .then(dados => JSON.stringify(dados));
    });
}
requisicao().then((resultado => console.log(resultado)));
