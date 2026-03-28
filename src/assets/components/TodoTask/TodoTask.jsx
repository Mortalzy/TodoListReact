import './TodoTask.css'

const TodoTask = (props) => {
    const {
        title,
        id,
        isDone,
        onDeleteTaskButton,
        onTaskCompleteChange,
        ref,
    } = props

    return (
        <li className="list-item" ref={ref}>
            <input
            
            type="checkbox" 
            checked={isDone}
            id={id}
            readOnly
            onChange={({target}) => {
                onTaskCompleteChange(id, target.checked)
            }}
            />
            <p>{title}</p>
            <button 
            className="delete-task-button"
            onClick={() => onDeleteTaskButton(id)}
            >
                <img 
                className="delete-task-img"
                src="src/assets/icons/delete-task__icon.png" 
                alt="delete-task-button" />
            </button>
        </li>
    
    )
}

export default TodoTask