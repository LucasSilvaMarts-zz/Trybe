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
