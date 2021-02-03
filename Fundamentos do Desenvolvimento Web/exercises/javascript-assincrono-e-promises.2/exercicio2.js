//  Primeiramente, instancie uma Promise; [X]
/*
Dentro dela:
 1° você deve produzir um array com dez números aleatórios de 1 a 50; [X]
 2° elevá-los todos ao quadrado; [X]
 3° Se a soma de todos esses elementos for inferior a 8000, a promise deve ser resolvida;[X]
 4° Caso contrário, ela deve ser rejeitada.[X]
 5° Acresça um then e um catch à Promise com qualquer coisa dentro só para que o código funcione.[x]
*/

// Quando a promise for resolvida com sucesso,
// retorne o resultado da divisão desse número por 2, 3, 5 e 10 em um array.

// Quando a Promise for rejeitada, imprima, via console.log ,
//a frase "É mais de oito mil! Essa promise deve estar quebrada!"

// Quando a Promise for bem-sucedida, encadeie nela uma segunda Promise que some os elementos do array.

/*
const returnApromise = () => {
  return new Promise((resolve, reject) => {
    const arr = [];

    for(index = 0; index < 10; index += 1) {
      arr.push(Math.round(Math.random() * 50) ** 2)
    }

    const sumOfArrElements = arr.reduce((acc, num) => acc + num);

    const divisionOfNumber = (num) => {
      const newArr = [2, 3, 5, 10];

      const divOfNumber =  newArr.map(number => {
        number = num / number

        const definitiveNum = Math.round(number)

        return definitiveNum;

      })


      if (divOfNumber < 8000) {
        return reject(divOfNumber)
      }
      resolve(divOfNumber)


    }

    divisionOfNumber(sumOfArrElements)

  })
  .then(divOfNumber => `Passou! O número é ${divOfNumber}`)
  .then(msg => console.log(msg))
  .catch(divOfNumber => console.log(`É mais de oito mil! Essa promise deve estar quebrada! ${divOfNumber}`));
}

returnApromise()
*/
// -------------------------------------------------------------------------------

return new Promise((resolve, reject) => {
  const arr = [];

  for(index = 0; index < 10; index += 1) {
    arr.push(Math.round(Math.random() * 50) ** 2)
  }

  const sumOfArrElements = arr.reduce((acc, num) => acc + num);

  const divisionOfNumber = (num) => {
    const newArr = [2, 3, 5, 10];

    const divOfNumber =  newArr.map(number => {
      number = num / number

      const definitiveNum = Math.round(number)

      return definitiveNum;

    })


    if (divOfNumber < 8000) {
      return reject(divOfNumber)
    }
    resolve(divOfNumber)


  }

  divisionOfNumber(sumOfArrElements)

})
.then(divOfNumber => `Passou! O número é ${divOfNumber}`)
.then(msg => console.log(msg))
.catch(divOfNumber => console.log(`É mais de oito mil! Essa promise deve estar quebrada! ${divOfNumber}`));
