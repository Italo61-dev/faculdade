// ESTRUTURA DE REPETIÇÃO FOR

// for(início; condição de parada; passo){
//     // comandos que serão repetidos
// }

// for(i = 0; i < 5;  i++){
//     console.log(i);
// }

// 
for(i = 0; i < 5; i++){
    if(i == 2){   // se i é igual a 2
      continue;   // encerre a iteração atual 
    }
    console.log(i);
  }