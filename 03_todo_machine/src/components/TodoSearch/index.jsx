import React from 'react';
import './TodoSearch.css';

function TodoSearch({ valorBuscar, setValorBuscar }) {
    //const [valorBuscar, setValorBuscar] = React.useState('');

    const buscarTodo = (event) => {
        console.log(event.target.value);
        setValorBuscar(event.target.value);
    };

    return (
        <>
            <input
                className="TodoSearch"
                placeholder="Oscar"
                value={valorBuscar}
                onChange={buscarTodo}
            />
            <p>{valorBuscar}</p>
        </>
    );
}

export { TodoSearch };