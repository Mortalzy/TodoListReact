import { useContext } from 'react'
import { TasksContext } from '../../context/TasksContext'
import './TodoInfo.css'

const TodoInfo = () => {
    const {
        tasks,
        deleteAllTasks,
    } = useContext(TasksContext)

    const total = tasks.length
    const done = tasks.filter( ({isDone}) => isDone).length

    return (
        <div className="todo-info">
            <p>Completed {done} from {total}</p>
            <p
            className='delete-items'
            onClick={deleteAllTasks} 
            
            >Delete items</p>
        </div>
    )
}

export default TodoInfo