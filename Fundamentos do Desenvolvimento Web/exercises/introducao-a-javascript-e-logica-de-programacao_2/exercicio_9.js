/* 
 Utilizando o array criado no exercício anterior imprima o 
 resultado da divisão de cada um dos elementos por 2 .
*/

let array = [];

for (let num = 1; num <= 25; num += 1) {
  array.push(num)
}

//console.log(array)



for (let num = 0; num < array.length; num += 1) {
 console.log(array[num] + ' : ' + array[num] / 2);
}

