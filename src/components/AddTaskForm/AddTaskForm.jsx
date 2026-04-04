import Field from "../Field/Field"
import Button from "../Button/Button"
import './AddTaskForm.css'
import { useContext, useState } from "react"
import { TasksContext } from "../../context/TasksContext"

const AddTaskForm = () => {
    const {
        addNewTask,
        newTaskTitle,
        setNewTaskTitle,
        inputRef,
    } = useContext(TasksContext)

    const [error, setError] = useState('')

    const clearNewTaskTitle = newTaskTitle.trim()
    const isNewTaskTitleEmpty = clearNewTaskTitle.length === 0

   const onSubmit = (event) => {
    event.preventDefault()

    if(!isNewTaskTitleEmpty) {
        addNewTask(clearNewTaskTitle)
    }
   }

   const onInput = (event) => {
    const {value} = event.target
    const clearValue = value.trim()
    const hasOnlySpaces = value.length > 0 && clearValue.length === 0

    setNewTaskTitle(value)
    setError(hasOnlySpaces ? 'The task cannot be empty' : '')
   }

    return (
        <form 
        className="add-task-form"
        onSubmit={onSubmit}
        
        >
            <Field
            type="text"
            placeholder="Add new task"
            value={newTaskTitle}
            onInput={onInput}
            ref={inputRef}
            error={error}
            
            />
            <Button
            type="submit"
            isDisabled={isNewTaskTitleEmpty}
            >
                Add
            </Button>
            
            
        </form>
    )
}

export default AddTaskForm