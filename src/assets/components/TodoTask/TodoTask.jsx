import './TodoTask.css'

const TodoTask = (props) => {
    const {
        title
    } = props

    return (
        <>
            <li className="list-item">
                <input type="checkbox" />
                <p>Приготовить суп</p>
                <button className="delete-task-button">
                    <img 
                    src="src/assets/icons/delete-task__icon.png" 
                    alt="delete-task-button" />
                </button>
            </li>
        </>
    )
}

export default TodoTask