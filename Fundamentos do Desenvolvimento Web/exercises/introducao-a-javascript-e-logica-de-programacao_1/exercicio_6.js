/* 
Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).
Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
Exemplo: bishop -> diagonals
*/

let piece = 'Queen';
let res = piece.toLowerCase();

if (res = 'King') {
  console.log('King move to all directions')
}

if (res = 'Queen') {
  console.log('Queen can move to horizontal, vertical and diagonals')
}
 
if (res = 'Bishop') {
  console.log('Bishop can move to diagonals')
}


