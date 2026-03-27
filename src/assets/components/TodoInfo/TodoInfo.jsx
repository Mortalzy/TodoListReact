import './TodoInfo.css'

const TodoInfo = (props) => {
    const {
        tasks,
        tasksDone,
        onDeleteButton,
    } = props

    
    return (
        <div className="todo-info">
            <p>Completed {tasksDone} from {tasks.length}</p>
            <p
            className='delete-items'
            onClick={onDeleteButton} 
            
            >Delete items</p>
        </div>
    )
}

export default TodoInfo