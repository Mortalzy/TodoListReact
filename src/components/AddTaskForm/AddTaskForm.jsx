import Field from "../Field/Field"
import Button from "../Button/Button"
import './AddTaskForm.css'
import { useContext } from "react"
import { TasksContext } from "../../context/TasksContext"

const AddTaskForm = () => {
    const {
        addNewTask,
        newTaskTitle,
        setNewTaskTitle,
        inputRef,
    } = useContext(TasksContext)

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
            ref={inputRef}
            
            />
            <Button
            className="add-task-button"
            type="submit"
            >
                Add
            </Button>
            
            
        </form>
    )
}

export default AddTaskForm