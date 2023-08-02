nota = 0.8

// determina aprovados para a segunda etapa
function primeiraEtapa(acertos_na_prova, 
    semestres_cursados){
/*   
* Help: 
* acertos_na_prova recebe a quantidade de acertos na prova
* semestres_cursados: semestres cursados
*/
// regras para aprovação
const total_de_questoes = 20 
const nota_minima_aprovacao = 0.7 
const minimo_semestres = 3

// calcula a nota %
let nota = acertos_na_prova / total_de_questoes

// calcula se vai ser aprovado ou não
if((nota >= nota_minima_aprovacao) && 
(semestres_cursados >= minimo_semestres)){
return "Aprovado";
}

else if(nota >= nota_minima_aprovacao){
    return "Você foi incluído em nosso banco de currículos";
}

else{
return "Reprovado";
}
}

console.log(primeiraEtapa(10,0))