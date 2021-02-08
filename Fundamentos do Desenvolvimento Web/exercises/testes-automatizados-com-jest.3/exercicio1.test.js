const randomNumberFunction = require("./exercicio1");
/*
Crie uma função que gere um número aleatório entre 0 e 100.
Você irá criar também os testes para essa função.
Utilizando o mock, defina o retorno padrão como 10.
Teste se a função foi chamada, qual seu retorno e quantas vezes foi chamada.
*/

test('Testando se o retorno da função é 10', () => {
  randomNumberFunction.randomNumber = jest.fn();

  // Testando se a função foi chamada;
  randomNumberFunction.randomNumber();
  expect(randomNumberFunction.randomNumber).toHaveBeenCalled();
})