/* 
  Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;
*/

let numeros = []; // 1° Criamos um array vazio
 
for(let i = 1; i <= 25; i += 1) { // 2° cria um for que vai criar os números de 1 até 25
  numeros.push(i) // 3° adiciona os números criados no array vazio com o .push() 
}

console.log(numeros) // 4° Imprime o resultado