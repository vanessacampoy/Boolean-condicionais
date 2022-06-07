var seInscreveu = false;
var data = "11/06/22";
if (seInscreveu) {
  console.log("Ingresso comprado, a data do evento é " + data);
} else {
  console.log("Ainda não comprou o ingresso");
}

var Netflix = false;
var DisneyPlus = true;

if (Netflix) {
  console.log("Assina Netflix!");
} else if (DisneyPlus) {
  console.log("Assina Disney Plus!");
} else {
  console.log("Não tem assinaturas!");
}

var refrigerante = false;
if (refrigerante) {
  console.log("Você toma refrigerante");
} else {
  console.log("Não toma refrigerante");
}

//Operador de negação - o operador ! nega uma operação booleana, ou seja, !true é igual a false

//Operadores de comparação
var x = 10;
console.log(typeof x, x == 10); //true
console.log(typeof x, x === "10"); //false

var y = "carro";
console.log(y === "carro"); //true
console.log(y !== "carro"); //false
console.log(y !== "Carro"); //true
console.log(y !== "carro"); //false

var condicional = 7 - 8 && 3 + 4;
if (condicional) {
  console.log("Verdadeiro", condicional);
} else {
  console.log("Falso"); //retorna verdadeiro com o valor de 7 pq foi o último lido e era verdadeiro
}

var condicional = 7 + 7 || 3 + 4;
if (condicional) {
  console.log("Verdadeiro", condicional);
} else {
  console.log("Falso"); //retorna verdadeiro com o valor de 14, quando ele encontra um primeiro verdadeiro ele ja aparece true
}

//Switch
var sono = "cama";

switch (sono) {
  case "dormir":
    console.log("Se estiver com sono durma!");
    break;

  case "acordado":
    console.log("Se não estiver com sono, acorde!");
    break;

  case "manha":
    console.log("Se for de manhã, levante");
    break;

  default:
    console.log("Já está dormindo!");
}

//Exercícios
var idadeAna = 34;
var idadeCarol = 34;
console.log(
  `Ana tem ${idadeAna} anos e sua idade é menor que a idade de Carol que tem ${idadeCarol} anos`
);

if (idadeAna > idadeCarol) {
  console.log("Idade da Ana á menor");
} else if (idadeAna === idadeCarol) {
  console.log("Mesma idade");
} else {
  console.log("A idade de Carol é maior");
}

var expressao = 5 - 2 && 5 - "" && 5 - 2;
console.log(expressao); //3 - retorna o último valor verdadeiro ou o primeiro falso que encontrar

//Verificar se as variáveis sao verdadeiras ou falsas
var cor = "amarela";
var tamanho = false;
var time = "Corinthians";
var casa;
var diasTrabalhados = 0;

console.log(!!cor, !!tamanho, !!time, !!casa, !!diasTrabalhados);
//true false true false false

//comprar número de habitantes
var brasil = 207
var china = 1340

if (brasil > china) {
  console.log("Brasil tem mais habitantes que a China")
} else if (brasil === china) {
  console.log("Brasil e China tem o mesmo número de habitantes")
} else {
  console.log("China tem mais habitantes que o Brasil")
}
