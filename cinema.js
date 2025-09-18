// ingresso do cinema tem regras:
//Preço normal: R$ 20,00
//Estudante paga metade
//Idoso com idade maior ou igual a 60 paga 30% de desconto
//Crianças menores de 12 anos pagam gratuito
//Peça o nome e idade do cliente.
//Calcule o preço do ingresso e exiba uma mensagem completa com os valores.

let ingresso = 20.00;
let nome = "Brenda";
let idade = 25;
let estudante = false;


if (idade < 12){
    console.log(nome + "Seu ingresso é gratuito!");
} else if (idade >= 60){
    ingresso = ingresso - (ingresso * 0.3);
    console.log( nome + " seu ingresso com desconto é: R$ " + ingresso + " reais");
} else if (idade >= 12 && idade < 60){
    console.log(estudante == true ? "Seu ingresso com desconto é: R$ " + ingresso + "reais" : "Seu ingresso é: R$ " + ingresso + " reais");
    ingresso = ingresso / 2;
} else {
    console.log(nome + "Seu ingresso é: R$ " + ingresso + " Reais");
}