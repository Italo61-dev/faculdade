// objeto = {
//     "chave1":1,
//     "chave2":2,
//     "chave3":3
// }
 
// // 1ª forma de acesso 
// valor_chave_1 = objeto.chave1 
// console.log("O valor da chave1 é", valor_chave_1)  // O valor da chave1 é 1
 
// // 2ª forma de acesso
// valor_chave_2 = objeto['chave2']
// console.log("O valor da chave2 é", valor_chave_2) // O valor da chave2 é 2
///////////////////////////////////////////////////////////////////////////

//Agora, veja um exemplo um pouco mais complexo:
// objeto = {
//     "chave1":{ "camada1_1": 5 },
//     "chave2":['abacate', 'bola', 'cavalo']
// }

// // Acessando o valor da chave "camada1-1"
// valor_1 = objeto.chave1.camada1_1
// console.log(valor_1)

// valor_2 = objeto.chave2
// console.log(valor_2[1])

// Percorrendo um objeto
// Podemos percorrer um objeto inteiro com o auxílio de um laço de repetição. Observe o exemplo a seguir:
// objeto = {    
//     "chave1":{ "camada1_1":5 },
//     "chave2":['abacate', 'bola', 'cavalo']
// }
// for(i in objeto){
//     chave = i             // coleta a chave
//     valor = objeto[i]     // pega o valor correspondente a chave
//     console.log(chave, "->", valor) // imprime chave e valor atual
// }
//////////////////////////////////////////////////////////////////

var objeto = {
    "chave" : "valor0",
    "chave1" : 1,
    "chave2" : true,
    "chave3" : [1, 2, 3],
    "chave4" : {
        "chave4.1":{
            "chave4.2":{
                "chave4.3":123
            }
        }
    }
}

console.log(objeto.chave4["chave4.1"]["chave4.2"]["chave4.3"])