import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'

import Header from './componentes/Header';
import AddToDo from './componentes/AddToDo';
import ToDos from './componentes/ToDos';

import './assets/App.css';

function App() {

  const [toDos, setToDos] = useState([])

  const handleToDoAddition = (title) => {
    const newToDos = [...toDos, {
      id: uuidv4(),
      title: title,
      completed: false,
    }]

    setToDos(newToDos)
  }

  const handleToDoDelete = (toDoId) => {
    const newTodos = toDos.filter(toDo => toDo.id !== toDoId)

    setToDos(newTodos)
  }

  const handleToDoClick = (toDoId) => {
    const newToDos = toDos.map(toDo => {
      if(toDo.id === toDoId) return {...toDo, completed: !toDo.completed}

      return toDo
    })

    setToDos(newToDos)
  }

  return (
    <div className="App">
      <Header>My Tasks</Header>
      <AddToDo handleToDoAddition={handleToDoAddition}/>
      <ToDos toDos={toDos} handleToDoClick={handleToDoClick} handleToDoDelete={handleToDoDelete}/>
    </div>
  );
}

export default App;