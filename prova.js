// estudando coisas basicas do js, reelembrando conceitos de variaveis, operadores, estruturas de controle e funções

// Questao 1: Slide pag 18

let a = 8;
let b = 10;
let media = (a+b)/2;
console.log("Sua media foi:", media);

// Questao 2: Slide pag 23

let eco = 0;
let din1 = 50 * 2;
let gasto = 30;
console.log("O valor economizado foi:", eco = din1 - gasto);

// Obs: 
// == igualdade de valor, === igualdade de valor e tipo, != diferente de valor, !== diferente de valor e tipo
// > maior que, < menor que, >= maior ou igual a, <= menor ou igual a

// Questao 3: Slide pag 28

let temp = 38;
console.log("A temperatura acima de 30°C :", temp>=30);

// Obs: && operador logico E, || operador logico OU, ! operador logico NAO

// Questao 4: Slide pag 

let ting = true;
let maioridade = 18;
let id = 17
console.log("Entrada liberada:", ting && id>=maioridade);

// Questao 5: Slide pag 40

let velocidade = 90;

if (velocidade <= 80) {
    console.log("Dentro do limite de velocidade");
}
else if (velocidade <= 100) {
    console.log("Cuidado, você está acima do limite de velocidade");
}
else {
    console.log("Você está muito acima do limite de velocidade, reduza imediatamente");
}

// Questao 6: Slide pag 45

let carro = {
    modelo: "M3",
    marca: "BMW",
    ano: 2020,
    auto: true
}
console.log("O carro modelo",carro.modelo,"da marca",carro.marca,"do ano",carro.ano,"tem direção automática?",carro.auto);

// Arrays a parte mais dificil que tem coisa e muita

let frutas = ["maçã","banana","laranja"];
console.log("A primeira fruta da lista é:", frutas[0]);

