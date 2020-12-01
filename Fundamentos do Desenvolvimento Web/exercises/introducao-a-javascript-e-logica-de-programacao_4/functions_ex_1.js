//Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
//Para ser palíndromo TODAS as letras precisam ser iguais (regra de negócio)

function ePalindromo (palavra) { //Cria a função que verifica se é palíndromo

  for(var i = 0; i < palavra.length / 2; i += 1) { //Percorre a string e usa metade do seu comprimento como referência

    if(palavra[i] != palavra[palavra.length - i - 1])  { //Verifique se cada letra é igual ao seu equivalente do outro lado (medido com índice - 1).
      return false;
    }
  } 

  return true;
}

console.log(ePalindromo('arara'))

