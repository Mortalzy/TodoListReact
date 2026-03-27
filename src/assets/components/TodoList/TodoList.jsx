import TodoTask from '../TodoTask/TodoTask'
import './TodoList.css'

const TodoList = (props) => {
    const {
        tasks,
        filteredTasks,
        onDeleteTaskButton,
        onTaskCompleteChange,
    } = props

    if(tasks.length < 1) {
        return (
            <div className='todo-list__empty'>There are no tasks</div>
        ) 
    }

    return (
        <ul className="todo-list">
           {(filteredTasks ?? tasks).map( ({id, title, isDone}) => {
            return (
                <TodoTask
                key={id}
                id={id}
                title={title}
                isDone={isDone}
                onDeleteTaskButton={onDeleteTaskButton}
                onTaskCompleteChange={onTaskCompleteChange}
                />)
                
           } )}
        </ul>
    )
}

export default TodoList