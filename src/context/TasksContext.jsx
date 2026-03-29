import { createContext } from "react"
import useTasks from "../hooks/useTasks"
import useIncompleteTaskScroll from "../hooks/useIncompleteTaskScroll"

export const TasksContext = createContext({})

export const TasksProvider = (props) => {
    const {children} = props

    const {
        tasks,
        filteredTasks,
        deleteTask,
        toggleTaskComplete,
        deleteAllTasks,
        newTaskTitle,
        setNewTaskTitle,
        searchQuery,
        setSearchQuery,
        inputRef,
        addNewTask,
    } = useTasks()

    const {
        firstFailedTaskRef,
        firstFailedTaskId,
    } = useIncompleteTaskScroll(tasks)

    return (
        <TasksContext.Provider
        value={{
            tasks,
            filteredTasks,
            deleteTask,
            toggleTaskComplete,
            firstFailedTaskRef,
            firstFailedTaskId,
            deleteAllTasks,
            newTaskTitle,
            setNewTaskTitle,
            searchQuery,
            setSearchQuery,
            inputRef,
            addNewTask
        }}
        >
            {children}
        </TasksContext.Provider>
    )
} 