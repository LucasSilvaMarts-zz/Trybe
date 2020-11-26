/*
Escreva um programa que defina três números em variáveis
no seu começo e retorne true se pelo menos uma das três for ímpar. 
Caso contrário, ele retorna false .
*/ 

let num1 = 8;
let num2 = 2;
let num3 = 4;

if (num1 % 3 == 0 || num2 % 3 == 0 || num3 % 3 == 0) {
  console.log(true);
} else {
  console.log(false);
}