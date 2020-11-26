/* 
Escreva um programa que se inicie com dois valores em duas variáveis diferentes: 
o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro
(valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.
*/

let valorCusto = 5;
let imposto = valorCusto * 0.2;
let valorVenda = 10;

let lucroBruto = valorVenda - valorCusto;
let lucroComImposto = lucroLiquido - imposto;

let lucroDeMilProdutos = lucroBruto * 1000;

console.log(lucroBruto, )