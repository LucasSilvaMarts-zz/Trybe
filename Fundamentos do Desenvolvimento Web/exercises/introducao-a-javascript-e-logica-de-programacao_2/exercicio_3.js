/* 
Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
A média aritmética é o resultado da soma de todos os elementos divido pelo número
 total de elementos.
*/

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let soma = 0;


for(let i = 0; i < numbers.length; i += 1) {
  soma += numbers[i] 
}

console.log(soma / numbers.length)

/* 
  1: criar o array 
  2: criar uma variável iniciada em 0
  3: percorrer o array com o for
  4: incrementar a variável com os ítens do array e somando eles
  5: usar a variável de incremento e dividir pelo tamanho do array
  6: imprimir o resultado usando o console.log
*/