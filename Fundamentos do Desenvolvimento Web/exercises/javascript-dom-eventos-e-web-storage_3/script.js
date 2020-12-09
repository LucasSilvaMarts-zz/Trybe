function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

// Exercício 1

// Cria os dias do calendário
function calendarDays() {
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const daysNumber = document.querySelector('#days');

  for(let index = 0; index < dezDaysList.length; index += 1) {
    const day = dezDaysList[index];
    const dayListItem = document.createElement('li'); 
    
    dayListItem.classList.add('day'); // Adiciona a classe days em todos os li
    dayListItem.innerHTML = day; 

    daysNumber.appendChild(dayListItem);

    // Adiciona a classe holiday
    if (day === 24) {
      dayListItem.classList.add('holiday')
    };
    if (day === 25) {
      dayListItem.classList.add('holiday')
    };
    if (day === 31) {
      dayListItem.classList.add('holiday')
    };

    // Adiciona a classe friday
    if (day === 4) {
      dayListItem.classList.add('friday')
    };
    if (day === 11) {
      dayListItem.classList.add('friday')
    };
    if (day === 18) {
      dayListItem.classList.add('friday')
    };
    if (day === 25) {
      dayListItem.classList.add('friday')
    };
  };
  
};

calendarDays();



