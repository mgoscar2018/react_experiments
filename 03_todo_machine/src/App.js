import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';

//import './App.css';

const defaultTodos = [
  { text: 'Terminar de llenar formato de VISA', completed: true },
  { text: 'Terminar curso de Intro a React', completed: false },
  { text: 'Continuar con curso básico de Inglés', completed: true },
];

function App() {
  // Estado inicial de nuestros TODOs
  const [todos, setTodos] = React.useState(defaultTodos);
  // El estado de nuestra búsqueda
  const [valorBuscar, setValorBuscar] = React.useState('');
  // Cantidad de TODOs completados
  const todosCompletados = todos.filter(todo => todo.completed).length;
  // Cantidad total de TODOs
  const totalTodos = todos.length;
  // Creamos una nueva variable en donde guardaremos las coincidencias con la búsqueda
  let todosEncontrados = [];

  // Lógica para filtrar
  if (!valorBuscar.length >= 1) {
    todosEncontrados = todos;
  }else {
    todosEncontrados = todos.filter(todo => {
      const textoTodo = todo.text.toLowerCase();
      const textoBuscar = valorBuscar.toLowerCase();
      return textoTodo.includes(textoBuscar);
    });
  }

  /**
 * TOGGLE TODO COMPLETED/UNCOMPLETED
 * @param {text} text 
 */
const toggleCompleteTodo = (text) => {  
  setTodos(//* Update the state of todos with setTodos    
    todos.map(todo => { //* Filter the todos array      
      if (todo.text === text) {//* If the text of the todo matches the text of the todo that was clicked
        return {          
          ...todo, //* ... Include the rest of the todo array
          completed: !todo.completed,//* And toggle the completed property
        };
      }
      return todo; //* Return the rest of the todos array unchanged
    })
  );
};

/**
 * DELETE TODO
 * @param {text} text 
 */
const eliminarTodo = (text) => {  
  setTodos(todos.filter(//* Update the state of todos with setTodos
    todo => todo.text !== text //* Filter the todos array to remove the todo that was clicked
  ));
};

  // React sólo permite regresar una etiqueta por componente. Utilizamos React.Fragment ya que es invisible
  return (
    <React.Fragment> 
      {/* Pasamos el estado a nuestro componente */}
      <TodoCounter 
        total={totalTodos}
        completados={todosCompletados}
      />
      <TodoSearch 
        valorBuscar={valorBuscar}
        setValorBuscar={setValorBuscar}
      />        
      <TodoList>
        {todosEncontrados.map(todo => ( //muestra el listado de los "ToDo's" que coinciden con la búsqueda
          <TodoItem 
            key={todo.text} 
            text={todo.text} 
            completed={todo.completed}
            toggleCompTodo={() => toggleCompleteTodo(todo.text)}
            deleteTodo={() => eliminarTodo(todo.text)}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
      
    </React.Fragment>
  );
}

export default App;
