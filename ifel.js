let idade = 17
let temcarteira = false
let dirigi = idade >= 18 || temcarteira;
console.log("Pode dirigir ?", dirigi)

let maioridade = 18
let temingresso = false
let acessolivre = maioridade && temingresso
console.log("Acesso liberado ?", acessolivre)

let nota = 8
if (nota>= 7){
    console.log("Aprovado");
}
else if (nota>=5){
    console.log("Recuperacao")
}
else{
    console.log("Reprovado")
}

let velocidade = 110
if (velocidade <60){
    console.log("Dentro do limite")
}
else if (velocidade >= 60 && velocidade <= 80) {
console.log("Atencao acima da velocidade")
}
else {
    console.log("Multado")
}


