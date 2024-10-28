// Crie três variáveis para representar:
// Seu nome como string.
// Sua idade como number.
// Se você está estudando TypeScript como boolean.

let nome: string = "Nathalia"
let idade: number = 22
let estudando: boolean = true


// Crie duas variáveis chamadas a e b, ambas do tipo number.
// Atribua valores a elas e crie uma terceira variável chamada resultado que contenha a soma de a e b.

let a: number = 5
let b: number = 7
let resultado:number = a + b
console.log(resultado)

// Declare uma variável que começa indefinida e depois atribua um valor nulo a ela.

let variavel
variavel: null

// Crie uma variável chamada quantidade com o valor 42 do tipo number.
// Converta essa variável para string usando dois métodos diferentes e exiba o resultado.

let quantidade:number = 42
let quantidadeString:string = quantidade.toString()
let qtdString: string = String(quantidade)
console.log(quantidadeString)
console.log(qtdString)


// Crie uma variável chamada altura com o valor "1.75" do tipo string.
// Converta essa variável para number usando dois métodos diferentes e exiba o resultado.

let altura:string = '1.75'
let Altura:number = Number(altura)
let alturaConvertida: number = +altura
console.log(Altura)
console.log(alturaConvertida);


// Crie uma variável chamada resposta com o valor "true" do tipo string.
// Converta essa variável para boolean e exiba o resultado.

let valor: string = 'true'
let valorConvertido:boolean = Boolean(valor)
console.log(valorConvertido)

// Crie variáveis com valores "falsy", como 0, "", null, undefined, e NaN.
// Converta cada uma delas para o tipo boolean usando Boolean() e exiba o resultado.

let valor1:string = 'falsy'
let valor2:number = 0
let valor3:null = null
let valor4:undefined = undefined
let valor5:number = NaN
let NovoValor1:boolean = Boolean(valor1)
let NovoValor2:boolean = Boolean(valor2)
let NovoValor3:boolean = Boolean(valor3)
let NovoValor4: boolean = Boolean(valor4)
let NovoValor5:boolean = Boolean(valor5)


console.log(`Valor1: ${NovoValor1}\n Valor2: ${NovoValor2},\n Valor3: ${NovoValor3}\n, Valor4: ${NovoValor4}\n Valor5: ${NovoValor5}`)


// Crie uma variável para o nome de uma linguagem de programação e outra para o ano atual, sem declarar os tipos explicitamente.

let linguagem = 'TypeScript'
let anoAtual = 2024
console.log(`No ano de ${anoAtual} estou estudando ${linguagem}`)


// Declare três variáveis explicitamente:
// Uma variável para sua cidade, como string.
// Uma variável para a temperatura atual, como number.
// Uma variável para indicar se está chovendo, como boolean.

let cidade: string = 'Salvador'
let temperatura: number = 38
let Chuva: boolean = false


// Crie uma variável chamada direcao, que pode conter apenas os valores "norte", "sul", "leste" ou "oeste".

type direcao = 'Norte'| 'Sul' |'Leste' | 'Oeste'


// Crie um alias chamado Carro, que deve conter as propriedades marca (string), modelo (string) e ano (number).

type Carro = {
    marca:string,
    modelo:string,
    ano:number
}

let MeuCarro:Carro = {marca:'BMW',modelo:'Só Deus Sabe',ano:2024}


// Literal String em Variáveis: Defina uma variável status que só aceite os valores "online", "offline" ou "busy". Em seguida, defina uma segunda variável chamada currentStatus e atribua a ela um dos valores permitidos pelo tipo literal.

type status = 'Online' | 'Offline' | 'Busy'
let currentStatus:status = 'Online'


// Literal Numérico em Constantes: Crie uma constante day que aceite apenas os valores literais 1, 2, 3, 4, ou 5, representando dias úteis da semana.

type diasUteis = 1|2|3|4|5
const day:diasUteis = 4


// Literal Booleano em Variáveis: Defina um tipo literal booleano chamado IsActive que só aceite os valores true ou false. Em seguida, crie uma variável userActive usando esse tipo.

type IsActive = true| false
let userActive:IsActive = true


// Literal para Descrever Estados: Crie uma variável alignment que aceite os valores literais "left", "center" ou "right", representando alinhamentos de texto.

type alinhamentos = 'left'|'center'|'rigth'
const alignment:alinhamentos = 'left'

// Literal para Cores Específicas: Defina um tipo literal chamado PrimaryColor que só aceite os valores "red", "blue" ou "yellow". Em seguida, crie uma variável chamada selectedColor usando esse tipo literal.

type PrimaryColor = 'red'|'blue'|'yellow'
const selectedColor: PrimaryColor = 'yellow'

