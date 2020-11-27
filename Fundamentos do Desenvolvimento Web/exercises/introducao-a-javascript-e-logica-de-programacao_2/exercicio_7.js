/* 
  Utilizando for , descubra qual o menor valor contido no array e imprima-o;
*/

let menor = 1000;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for(let i = 0; i < numbers.length; i += 1) {
  if(numbers[i] < menor) {
    menor = numbers[i];
  }
}

console.log(menor);