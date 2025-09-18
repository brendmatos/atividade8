let idade = 25;
if (idade < 16){   
    console.log("Você ainda não pode votar!");
} else if ( idade >=16 && idade == 17 || idade >70){
    console.log ("Seu voto é opcional!");
}else {
    console.log("Seu voto é obrigatório!");
}