import { useContext } from 'react'
import TodoTask from '../TodoTask/TodoTask'
import './TodoList.css'
import { TasksContext } from '../../context/TasksContext'

const TodoList = () => {
    const {
        tasks,
        filteredTasks,
    } = useContext(TasksContext)

    const hasTasks = tasks.length > 0
    const isEmptyFilteredTasks = filteredTasks?.length === 0

    if(!hasTasks) {
        return (
            <div className='todo-list__empty'>There are no tasks</div>
        ) 
    }

     if(hasTasks && isEmptyFilteredTasks) {
        return (
            <div className='todo-list__empty'>Task not found</div>
        ) 
    }

    return (
        <ul className="todo-list">
           {(filteredTasks ?? tasks).map( (task) => {
            return (
                <TodoTask
                key={task.id}
                {...task}
                />)
           } )}
        </ul>
    )
}

export default TodoList