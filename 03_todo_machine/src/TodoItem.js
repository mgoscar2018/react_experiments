import './TodoItem.css';

function TodoItem(props){
    const completarTodo = () => {
        alert('Ya completaste el todo ' + props.text);
    };
    
    const eliminarTodo = () => {
        alert('Borraste el todo ' + props.text);
    };

    return(
        <li className="TodoItem">
            <span 
                className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
                onClick={completarTodo}
            >
                √
            </span>
            <p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
                {props.text}
            </p>
            <span 
                className="Icon Icon-delete"
                onClick={eliminarTodo}
            >
                X
            </span>
        </li>
    );
}

export { TodoItem };