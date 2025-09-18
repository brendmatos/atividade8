/* Crie um algoritmo que tenha 3 alunos cada aluno tenha duas notas; 
E calcule a média e diga se foi aprovado ou reprovado (média >= 7);
Use a até a segunda casa decimal; 
Exiba o nome do aluno e a nota, utilize a crase para exibir os dados;
Desafio faça com objetos */

let alunos = [ //array 
    {
        nome: "Brenda",
        nota1: 7.5,
        nota2: 8.0
    },
 {
        nome: "Davi",
        nota1: 6.0,
        nota2: 5.5
    },
  {
        nome: "Wesley",
        nota1: 8.0,
        notas2: 8.0
    }
]
  
for (let aluno of alunos){
    console.log(aluno.nome);
    let media = (aluno.nota1 + aluno.nota2) / 2;
    let status = media >= 7 ? "Aprovado" : "Reprovado";
    console.log(`O aluno ${aluno.nome} tem a média ${media} e está ${status}`);
}






 

