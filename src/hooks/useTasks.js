import { useState, useEffect, useRef,  } from "react"
import tasksAPI from "../api/tasksAPI"

const useTasks = () => {
    const [tasks, setTasks] = useState([])

    const [newTaskTitle, setNewTaskTitle] = useState('')
    const [searchQuery, setSearchQuery] = useState('')

    const inputRef = useRef(null)

    const addNewTask = (title) => {
        const newTask = {
            title,
            isDone: false,
        }

        tasksAPI.add(newTask)
        .then((addedTask) => {
            setTasks([...tasks, addedTask])
            setNewTaskTitle('')
            setSearchQuery('')
            inputRef.current.focus()
        })
    }

    const deleteTask = (id) => {
        tasksAPI.delete(id)
        .then(()=> {
            setTasks(tasks.filter((task) => id !== task.id))
        })
    }

    const deleteAllTasks = () => {
        const isConfirmed = confirm('Are you sure to delete all tasks?')
        if(isConfirmed) {
            tasksAPI.deleteALL(tasks)
            .then(() => setTasks([]))
        }    
}
        
    
    const toggleTaskComplete = (id, isDone) => {
        tasksAPI.toggleComplete(id, isDone)
        .then(() => {
            setTasks(
            tasks.map((task) => {
                if(task.id === id) {
                    return {...task, isDone}
                }
                return task
            })
            )
        })
    }

    const clearSearchQuery = searchQuery.trim().toLowerCase()
    const filteredTasks = clearSearchQuery.length > 0 
    ? tasks.filter( ({title}) => title.toLowerCase().includes(clearSearchQuery))
    : null

    useEffect( () => {
        inputRef.current.focus()

        tasksAPI.getAll().then(setTasks)
    }, [])

    return {
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
        addNewTask
    }
}

export default useTasks