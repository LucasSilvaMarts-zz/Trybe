import './App.css';

const agenda = ['Estudar', 'Aula', 'Cuso da Trybe', 'Comer', 'Dormir'];
const task = agenda.map((taskList) => {
  return <li>{taskList}</li>
})


function App() {
  return (
    <div className="App">
      {task}
    </div>
  );
}

export default App;
