let economias = 0;
let add1 = 50; 
let poupanca = 2
let gasteidinheiro = 30
let total = economias + add1 * poupanca - gasteidinheiro
console.log('Final do monte: R$',total);

let temperatura1 = 67
let temperatura2 = 30
console.log("A temperatura esta maior que 30 ?",temperatura1>temperatura2)

let pontuacao = 120;

console.log(pontuacao >= 100 ? "voce ganhou um premio" : "tente novamente");

let carro = {
    modelo: "Pagani Zonda R",
    ano: 2009,
    automatico: false
};

console.log(`O carro é um ${carro.modelo}, do ano ${carro.ano}, e ele ${carro.automatico ? "é automático" : "não é automático"}.`);