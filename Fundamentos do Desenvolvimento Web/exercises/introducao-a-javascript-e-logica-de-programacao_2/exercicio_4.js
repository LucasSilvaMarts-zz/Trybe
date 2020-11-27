/* 
Com o mesmo código do exercício anterior, caso valor final seja maior que 20,
 imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: 
 "valor menor ou igual a 20";
*/

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let soma = 0;
let media = 0;

for (let i = 0; i < numbers.length; i += 1) {
  soma += numbers[i]
}

media = soma / numbers.length;

if (media > 20) {
  console.log('Valor maior que 20')
} else {
  console.log('Valor menor ou igual a 20')
}

/*

  1: criar array
  2: criar a variável de (soma) incremento iniciada em 0
  3: criar uma segunda (media) variável de incremento iniciada em 0
  4: percorrer o array
  5: usar a variável soma para somar com os ítens do array
  6: atribuir a var media a opração de divisão da soma com os ítens do array
  7: caso a condição seja verdadeira
  8: imprimir 'valor maior que 20'
  9: caso a condição seja falsa
  10: imprimir 'valor menor ou igual a 20'
  
*/