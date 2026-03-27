import Field from "../Field/Field"
import Button from "../Button/Button"
import './AddTaskForm.css'

const AddTaskForm = (props) => {
    const {
        addNewTask,
        newTaskTitle,
        setNewTaskTitle,
    } = props

   const onSubmit = (event) => {
    event.preventDefault()

    addNewTask()
   }

    return (
        <form 
        className="add-task-form"
        onSubmit={onSubmit}
        
        >
            <Field
            className="field" 
            type="text"
            placeholder="Add new task"
            value={newTaskTitle}
            onInput={(event) => setNewTaskTitle(event.target.value)}
            
            />
            <Button
            className="add-task-button"
            title="Add"
            type="submit"
            />
        </form>
    )
}

export default AddTaskForm