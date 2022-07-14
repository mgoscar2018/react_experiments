// import React from 'react'; //parece que ya no es necesario importar react en los componentes
import './TodoCounter.css';

function TodoCounter({ total, completados }) {
    return(
        <h2 className="TodoCounter">Has completado {completados} de {total} ToDo's</h2>
    );
}

export {TodoCounter}; 