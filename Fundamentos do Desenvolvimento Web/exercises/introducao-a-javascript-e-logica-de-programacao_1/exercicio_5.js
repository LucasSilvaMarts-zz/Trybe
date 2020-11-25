/*
Faça um programa que defina três variáveis com os valores dos três
ângulos internos de um triângulo. Retorne true se os ângulos representarem os
ângulos de um triângulo e false caso contrário.

Para os ângulos serem de um triângulo válido, a soma dos três deve ser 180 graus.
Caso os ângulos estejam inválidos, o programa deve retornar uma mensagem de erro.
*/

let x = 60;
let y = 60;
let z = 60;
let somaAngulo = x + y + z;

if (somaAngulo != 180) {
  console.log('False. Erro: os ângulos informados não são de um triângulo')
} else if (somaAngulo = 180) {
  console.log('True, os ângulos são de um triângulo')
  
}
  
