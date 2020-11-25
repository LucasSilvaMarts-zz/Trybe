/*
Faça um programa que retorne o maior de três números. 
Defina no começo do programa três variáveis com os valores que serão comparados.
*/

let a = 150;
let b = 10;
let c = 35;

if (a > b && a > c) {
  console.log('O a é o maior ' + a)
} else if (b > a && b > c) {
  console.log('O b é o maior ' + b)
} else {
  console.log('O c é o maior ' + c)
}