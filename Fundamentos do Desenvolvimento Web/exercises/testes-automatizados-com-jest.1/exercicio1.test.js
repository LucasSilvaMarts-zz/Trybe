const { TestScheduler } = require("jest");

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// implemente seus testes aqui
// Teste se o retorno de sum(4, 5) é 9

test('sums two values', () => {
  expect(sum(4, 5)).toEqual(9);
});

// Teste se o retorno de sum(0, 0) é 0

test('sums 0 + 0 = 0', () => {
  expect(sum(0, 0)).toEqual(0);
});

// Teste se a função sum lança um erro quando os parametros são 4 e "5" (string 5)

test('parameter must to be a number', () => {
  expect(() => { sum(4, '5') }).toThrow();
 });