const randomNumberFunction = require("./exercicio1");
/*
Crie uma função que gere um número aleatório entre 0 e 100.
Você irá criar também os testes para essa função.
Utilizando o mock, defina o retorno padrão como 10.
Teste se a função foi chamada, qual seu retorno e quantas vezes foi chamada.
*/

test('Testando se o retorno da função é 10', () => {
  // definindo um retorno padrão;
  randomNumberFunction.randomNumber = jest
  .fn()
  .mockReturnValue(10);

  // Testando se a função foi chamada;
  randomNumberFunction.randomNumber();
  expect(randomNumberFunction.randomNumber).toHaveBeenCalled();

  // Testando qual é o seu retorno;
  expect(randomNumberFunction.randomNumber()).toBe(10);

  // Testando quantas vezes ela foi chamada;
  expect(randomNumberFunction.randomNumber).toHaveBeenCalledTimes(2);

})