const TodoInfo = (props) => {
    const {
        tasks,
        tasksDone,
        deleteTasks
    } = props
    return (
        <>
            <p>Completed {tasksDone} from {tasks}</p>
            <p onClick={deleteTasks}>Delete items</p>
        </>
    )
}

export default TodoInfo