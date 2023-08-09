var hora = 9
var minutos = 15
var total_entrevistas = 0
const saida = 17
 
var entrevistados = [
    "José da Silva",
    "Antonio de Sá",
    "Felipe Augusto",
    "Carla Moreira",
    "Pedro Malta",
    "Maria Sousa",
    "Marta da Silva",
    "Fausto Augusto",
    "Silvio Sávio",
    "Maísa Silva",
    "Lucas Lopes",
    "Zenildo Santos",
    "Bruno Lucas",
    "Luana Melo",
    "Felipe Santos",
    "Flávio Miguel",
    "Lauro Maria",
    "Juca dos Santos",
    "Luciana Carla",
    "Felipe Silva",
    "André Manuel",
    "Pedro Parker",
    "Ana Maria",
    "Thiago Melo"
]
 
// ordenando os entrevistados em ordem alfabética
entrevistados.sort()
 
for(i = hora; i < saida; i=i+1){
    if((i == 12)||(i==13)){
        continue
    }
    for(j = 0; j < 60; j = j+minutos){
        total_entrevistas++;    
        if(j == 0){
            console.log(i+":"+j+"0", 
             "=>", entrevistados[total_entrevistas - 1])
        }
        else{
            console.log(i+":"+j, 
             "=>", entrevistados[total_entrevistas - 1])
        }
    }
}