
/* Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) 
em conceitos de A a F. Siga essas regras: */

let notaPorcentagem = ;

switch (notaPorcentagem) {

  case notaPorcentagem >= 90:
    console.log('Nota A')
  break;

  case notaPorcentagem >= 80:
    console.log('Nota B')
  break;

  case notaPorcentagem >= 70:
    console.log('Nota C')
  break;

  case notaPorcentagem >= 60:
    console.log('Nota D')
  break;
  
  case notaPorcentagem >= 50:
    console.log('Nota E')
  break;
  
  case notaPorcentagem < 50:
    console.log('Nota F')
  break;
  default:
    console.log('O aluno foi reprovado')
}