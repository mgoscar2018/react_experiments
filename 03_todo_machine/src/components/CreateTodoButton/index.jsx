import './CreateTodoButton.css';


function CreateTodoButton() {
    const agregarTodo = (msg) => {
        alert(msg);
    };

    return (
        <button 
            className="CreateTodoButton"
            onClick={() => agregarTodo('Aquí se debería abrir el modal')}
        >
            +
        </button>
    );
}

export {CreateTodoButton};