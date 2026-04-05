import { useContext } from 'react'
import './TodoTask.css'
import { TasksContext } from '../../context/TasksContext'

const TodoTask = (props) => {
    const {
        title,
        id,
        isDone,
    } = props

    const {
        toggleTaskComplete,
        deleteTask,
        firstFailedTaskId,
        firstFailedTaskRef,
    } = useContext(TasksContext)

    return (
        <li 
        className="list-item" 
        ref={firstFailedTaskId === id ? firstFailedTaskRef : null}>
            <input
            
            type="checkbox" 
            checked={isDone}
            id={id}
            readOnly
            onChange={({target}) => {
                toggleTaskComplete(id, target.checked)
            }}
            />
            <p className={isDone ? 'is-done' : ''}>
                {title}
            </p>
            <button 
            className="delete-task-button"
            onClick={() => deleteTask(id)}
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