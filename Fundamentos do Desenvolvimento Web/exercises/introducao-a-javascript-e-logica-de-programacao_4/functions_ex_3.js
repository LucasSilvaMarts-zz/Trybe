// Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

/*
function menorIndice() {

  let array = [2, 4, 6, 7, -10, 0, -3];
  let indice = 0
  let menor = 1000


  for(position in array) {
    
    if(array[position] < menor) {
      indice = position
    }
     
  }

  return indice
}

console.log(menorIndice())

*/ 

function indiceDoMenor(numeros) {
  let indiceMenor = 0;
  for (let indice in numeros) {
    if (numeros[indiceMenor] > numeros[indice]) {
      indiceMenor = indice;
    }
  }
  return indiceMenor;
}

console.log(indiceDoMenor([2, 4, 6, 7, -10, 0, -3])); //6
