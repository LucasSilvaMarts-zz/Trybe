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

// Exercício 2

function holidaysBtn(feriados) {
  
  const btn = document.createElement('button');
  const buttonsContainer = document.querySelector('.buttons-container');

  btn.id = 'btn-holiday';

  buttonsContainer.appendChild(btn);
  
  btn.innerHTML = feriados;

};

holidaysBtn('Feriados')

// Exercício 3

function clickHolidaysBtn() {
  const btn = document.querySelector('#btn-holiday'); 
  const changeBgColor = document.querySelectorAll('.holiday');  


  btn.addEventListener('click', function() {
    for(index = 0; index < changeBgColor.length; index += 1) {
      let color = changeBgColor[index]
    
      if(color.style.backgroundColor === 'green') {
        color.style.backgroundColor = 'rgb(238,238,238)';
      } else {
        color.style.backgroundColor = 'green';
        
      }
    }
  
  })

};

clickHolidaysBtn();

// Exercício 4 

function sextaFeira(friday) {
  const btn = document.createElement('button');
  const buttonsContainer = document.querySelector('.buttons-container');

  btn.id = 'btn-friday';

  buttonsContainer.appendChild(btn);

  btn.innerHTML = friday;

};

sextaFeira('Sexta-feira')

// Exercício 5 

function clickFridayBtn() {
  const btn = document.querySelector('#btn-friday');
  const fridayDays = document.querySelectorAll('.friday');
  

  btn.addEventListener('click', function(){
    for(let index = 0; index < fridayDays.length; index += 1) {
      let changeText = fridayDays[index]
      

      if(changeText.innerText !== 'Sexta-feira') {
        changeText.innerText = 'Sextou';
      }
    }
  });
  
};

clickFridayBtn()

// Exercício 6 

function addZoomIn() {
  const selectdays = document.querySelector('#days');

  selectdays.addEventListener('mouseover', function(event) {
    event.target.style.fontSize = '30px';
  });
  
};

addZoomIn()

function addZoomOut() {
  const selectdays = document.querySelector('#days');

  selectdays.addEventListener('mouseout', function(event) {
    event.target.style.fontSize = '20px';
  });

};

addZoomOut()

// Exercício 7

function addTask(task) {
  const createTaskSpan = document.createElement('span');
  const addSpan = document.querySelector('.my-tasks');

  addSpan.appendChild(createTaskSpan);

  createTaskSpan.innerHTML = task;
};

addTask('Minha tarefa')

// Exercício 8

function addLabelTask(cor) {
  const taskDiv = document.createElement('div');
  const myTask = document.querySelector('.my-tasks');

  taskDiv.classList.add('task');

  myTask.appendChild(taskDiv);  

  taskDiv.style.backgroundColor = cor 
  
};

addLabelTask('green');

