let cars = ['Ferrari', 'Audi', 'volvo'];

for(let i in cars) {
  console.log(cars[i]); // Acessando os itens do array
}

// Iterando chaves do objeto 

let car = {
  type: 'Fiat',
  model: '500',
  color: 'White',
}; 

for(i in car) {
  console.log(i, car[i]); 
}