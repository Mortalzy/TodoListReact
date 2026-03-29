import { useState, useEffect, useRef, createContext } from "react"

export const TasksContext = createContext({})

export const TasksProvider = (props) => {
    const {children} = props

    const [tasks, setTasks] = useState( () => {
        const savedTasks = localStorage.getItem('tasks')

        if(savedTasks) {
            return JSON.parse(savedTasks)
        }
        else {
            return [{id: 'task-1', title: 'Купить молоко', isDone: false},
                    {id: 'task-2', title: 'Доделать проект', isDone: true},
                    {id: 'task-3', title: 'Погулять с собакой', isDone: false}]
        }
    }
        
    )
    const [newTaskTitle, setNewTaskTitle] = useState('')
    const [searchQuery, setSearchQuery] = useState('')

    const firstFailedTaskRef = useRef(null)
    const firstFailedTaskId = tasks.find( ({isDone}) => !isDone)?.id
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
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }, [tasks])

    useEffect( () => {
        inputRef.current.focus()
    }, [])


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