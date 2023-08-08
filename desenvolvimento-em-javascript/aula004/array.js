meu_primeiro_array = ["abacate", "biscoito", "casa"];

console.log(meu_primeiro_array[0])  // abacate
console.log(meu_primeiro_array[1])  // biscoito
console.log(meu_primeiro_array[2])  // casa

//Para obtermos o tamanho total de elementos em um array usamos a propriedade length:
console.log(meu_primeiro_array.length)  // 3

// Se quisermos buscar um conjunto de elementos desse array (subarray), podemos usar o método slice( ), informando como entradas desse método: (1) a posição de início e (2) a posição final (será considerada a posição anterior a esse índice para composição do subarray).

// ARRAY.slice(início, posição posterior ao fim)
// Por exemplo:


// dois_primeiros_elementos = meu_primeiro_array.slice(0,2)  
// console.log(dois_primeiros_elementos)  // [ 'abacate', 'biscoito' ]
 
// dois_ultimos_elementos = meu_primeiro_array.slice(1,3)  
// console.log(dois_ultimos_elementos)  // [ 'biscoito', 'casa' ]