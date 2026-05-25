// Aprendendo a usar objetos e fazer verificacoes
let eu = {
    nome: "Davi",
    idade: 16,
    craque: true
};

console.log(eu.nome);

// Usando objetos para fazer exemplos de coisas que funcionando no dia a dia
let pro = {
    prod: "Livros",
    prec: 30,
    emest: true
}
console.log("Produto:",pro.prod);
console.log("Preco R$:",pro.prec);

// Aprendendo a manipular objetos
let li = {
    liv: "Contos de um mentiroso",
    pag: 107,
    aut: "Dv"
}
console.log(li.liv,"tem",li.pag,"paginas")
li.genero = "Baseado em fatos reais ou nao"
console.log(li)

// Exemplo simples
let ca = {
    carr: "Pagani Zonda R",
    a: 2009,
    auto: false
}
console.log("O carro modelo",ca.carr,"do ano",ca.a,"e automatico ?",ca.auto)