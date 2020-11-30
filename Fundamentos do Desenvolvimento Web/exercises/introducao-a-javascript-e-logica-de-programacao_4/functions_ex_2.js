// Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

function IndiceDoMaiorDoArray() {
  
  let maior = 0
  let indice = 0
  
  let array = [2, 3, 6, 7, 10, 1]

  for(i = 0; i < array.length; i += 1) {
    if(array[i] > maior) { // i guarda a posição do elemento do array 
      maior = array[i];
      indice = i; 
    }
  }
  return indice;
}

console.log(IndiceDoMaiorDoArray())

