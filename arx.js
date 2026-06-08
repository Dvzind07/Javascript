// Uso simples do arrays
let Linguagens = ["Python", "Javascript", "Cobol"];
console.log("Linguagens que quero aprender sao", Linguagens[0],Linguagens[1],Linguagens[2])

// Operacoes com arrays
let notas = [7.5, 8.0, 9.2];
let mediaa = (notas[0] + notas[1] + notas[2] ) /3;
console.log("A media das notas foi:", mediaa.toFixed(2));

// Arrays aprendendo a fazer uma lista e manipulacao dela(adicao de elemento)
let t = ["Estudar Javascript","jogar com helo","resolver assuntos da financas da mini empresa" ];
t.push(" e fazer o evento do ryu");
console.log("Lista do que tenho que fazer:");
console.log(t[0],",",t[1],"e",t[2],t[3]);

// Excluindo um elemento do arrays usando pop
let bla = ["Coisa chata 1 ","coisa chata 2","coisa chata 3"];
bla.pop();
console.log(bla)

// Uso do shift no arrays
let sla = ["1","2","3"];
sla.shift();
console.log(sla);

//Uso do unshift no arrays
let abc = ["a","b","c"];
abc.unshift("Primeiro");
console.log(abc);

// Uso do length
let nseioqbotomais = ["eu","tu","vos"];
console.log(nseioqbotomais.length);

// Uso do includes, esse aq pra eu n esquecer verifica se o bagui ta na lista ou nao
let l = ["feijao","farinha","peixe"];
console.log(l.includes("farinha"));

// Uso do indexof, ele retorna o indice de um item e se n tiver ele retorna no -1, bizarro
let cor = ["branco","preto","cinza"];
console.log(cor.indexOf("branco"));

// Uso do join, esse aq e massa pq junta tudo do arrays e transforma em string separado por um caractere, rocheda dms
let fraseparaela = ["Voce deixou um vazio","no meu peito que nao sai","nao consigo te esquecer","eu te amo mais que tudo nao queria que voce me abandonasse meu amor"]
console.log(fraseparaela.join(" "));

// Uso do splice retorna um parte do arrays sem modificicar o original, adiciona ou remove elementos do arrays
let algo = ["pao","arroz","leite"];
console.log(algo.splice(1,3));

let algo2 = ["joao","maria","pedro"];
algo2.splice(2,0,"ana");
console.log(algo2);

// Uso do ForEach executa uma funcao para cada item do arrays(nao retorna nada)
let pess = ["bla1","bla2","bla3"];
pess.forEach(nome => {
    console.log("Mas fala um " + pess);
});

// Uso do map, cria um novo arrays com base na transformacao de cada item
let numb = [1,3,8,9,10];
let double = numb.map(n => n *2);
console.log(double);














