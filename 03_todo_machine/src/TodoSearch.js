import './TodoSearch.css';

function TodoSearch() {
    const buscarTodo = (event) => {
        console.log(event.target.value);
    };

    return (
        <input 
            className="TodoSearch" 
            placeholder="Oscar"
            onChange={buscarTodo} 
        />
    );
}

export {TodoSearch};