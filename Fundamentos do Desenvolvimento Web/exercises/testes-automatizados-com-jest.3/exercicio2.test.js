const { randomNumber } = require("./exercicio2");


test('Testando uma nova implementação', () => {
  const mockRandomNumber = jest.fn(randomNumber).mockImplementation((a, b) => a / b);

  mockRandomNumber();

  // Testando se a função foi chamada;
  expect(mockRandomNumber).toHaveBeenCalled();

  // Testando o retorno da função;
  expect(mockRandomNumber(2, 2)).toBe(1);

});