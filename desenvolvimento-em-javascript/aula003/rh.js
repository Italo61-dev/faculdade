var hora = 9  // hora de entrada
var minutos = 15 // tempo da entrevista
var total_entrevista = 0 // 
const saida = 17 // hora de saida

for(i = hora; i < saida; i=i+1){
    //HORAS
    if((i == 12)||(i==13)){
        continue
    }

    //MINUTOS
    for(j = 0; j < 60; j = j+minutos){
        total_entrevista++;      
        if(j == 0){
            console.log("Entrevista #", total_entrevista,"=>", i+":"+j+"0")
        }
        else{
            console.log("Entrevista #", total_entrevista,"=>", i+":"+j)
        }
    }
}