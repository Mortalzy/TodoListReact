import { useState, useEffect, useRef,  } from "react"
import useTasksLocalStorage from "./useTasksLocalStorage"

const useTasks = () => {
    const {
        savedTasks,
        saveTasks,
    } = useTasksLocalStorage()

    const [tasks, setTasks] = useState( savedTasks ?? 
        [{id: 'task-1', title: 'Купить молоко', isDone: false},
        {id: 'task-2', title: 'Доделать проект', isDone: true},
        {id: 'task-3', title: 'Погулять с собакой', isDone: false}]
    )

    const [newTaskTitle, setNewTaskTitle] = useState('')
    const [searchQuery, setSearchQuery] = useState('')

    const inputRef = useRef(null)

    const addNewTask = () => {
        if(newTaskTitle.trim().length > 0) {
            const newTask = {
                id: crypto?.randomUUID() ?? new Date().toLocaleDateString(),
                title: newTaskTitle,
                isDone: false,
            }

            setTasks([...tasks, newTask])
            setNewTaskTitle('')
            setSearchQuery('')
            inputRef.current.focus()
        }
    }

    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => id !== task.id))
    }

    const deleteAllTasks = () => {
        const isConfirmed = confirm('Are you sure to delete all tasks?')
        if(isConfirmed) setTasks([])
    }

    const toggleTaskComplete = (id, isDone) => {
        setTasks(
            tasks.map((task) => {
                if(task.id === id) {
                    return {...task, isDone}
                }
                return task
            })
        )
    }

    const clearSearchQuery = searchQuery.trim().toLowerCase()
    const filteredTasks = clearSearchQuery.length > 0 
    ? tasks.filter( ({title}) => title.toLowerCase().includes(clearSearchQuery))
    : null
    
    useEffect( () => {
       saveTasks(tasks)
    }, [tasks])

    useEffect( () => {
        inputRef.current.focus()
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