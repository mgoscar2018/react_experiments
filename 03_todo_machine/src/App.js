import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';

//import './App.css';

const todos = [
  { text: 'Terminar de llenar formato de VISA', completed: true },
  { text: 'Terminar curso de Intro a React', completed: false },
  { text: 'Continuar con curso básico de Inglés', completed: false },
];

function App() {
  return (
    // React sólo permite regresar una etiqueta por componente. Utilizamos React.Fragment ya que es invisible
    <React.Fragment> 
      <TodoCounter />
      <TodoSearch />        
      <TodoList>
        {todos.map(todo => (
          <TodoItem key={todo.text} text={todo.text} completed={todo.completed}/>
        ))}
      </TodoList>
      <CreateTodoButton />
      
    </React.Fragment>
  );
}

export default App;
