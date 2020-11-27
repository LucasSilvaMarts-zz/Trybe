/* 
Para o segundo exercício, você deve somar todos os valores 
contidos no array e imprimir o resultado;
*/

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let soma = 0;

for(let i = 0; i < numbers.length; i += 1) {
  soma += numbers[i]
}

console.log(soma);

/*
  1: criar o array
  2: criar a variável que vai guardar os ítens do array iniciando com valor 0
  3: percorrer o array com o for
  4: incrementar a variável com o valor correspondente a cada loop 
  5: somar o valor da variável iniciada com 0 com os ítens do array 
  6: imprimir o valor da soma
*/