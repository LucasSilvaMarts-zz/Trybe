const { randomNumber } = require("./exercicio3");

test('testando a função que recebe três parâmetros e retorna a multiplicação', () => {
  const mockRandomNumber = jest.fn(randomNumber).mockImplementation((a, b, c) => a * b * c );

  mockRandomNumber();

  // Verificando se a função foi chamada;
  expect(mockRandomNumber).toHaveBeenCalled();

  // Verificando o seu retorno;
  expect(mockRandomNumber(1, 2, 4)).toBe(8);

  // Resetando a simulação para o seu estado inicial
  mockRandomNumber.mockReset();

  // Novo teste

  mockRandomNumber.mockImplementation((a) => a * 2);

  mockRandomNumber();

  expect(mockRandomNumber).toHaveBeenCalled();

  expect(mockRandomNumber(2)).toBe(4);

})