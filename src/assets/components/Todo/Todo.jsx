import { useEffect, useState, useRef } from "react"
import SearchTaskForm from '../SearchTaskForm/SearchTaskForm'
import AddTaskForm from '../AddTaskForm/AddTaskForm'
import TodoInfo from '../TodoInfo/TodoInfo'
import TodoList from '../TodoList/TodoList'
import Button from "../Button/Button"
import './Todo.css'


const Todo = () => {

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
    
    const tasksDone = tasks.filter( ({isDone}) => isDone).length

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

    const toggleTaskComlete = (id, isDone) => {
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
        <div className="container">
            <h1 className="title">TodoList</h1>
            <AddTaskForm 
            newTaskTitle={newTaskTitle}
            addNewTask={addNewTask}
            setNewTaskTitle={setNewTaskTitle}
            inputRef={inputRef}
            />
            <SearchTaskForm
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            />
            <TodoInfo
            tasks={tasks}
            tasksDone={tasksDone}
            onDeleteButton={deleteAllTasks}
            />
            <Button
            className='scroll-to-task-button'
            title="Find first not done task" 
            onClick={() => firstFailedTaskRef.current?.scrollIntoView({behavior: "smooth"})}
            />
            
            
            <TodoList
            tasks={tasks}
            filteredTasks={filteredTasks}
            onDeleteTaskButton={deleteTask}
            onTaskCompleteChange={toggleTaskComlete}
            firstFailedTaskRef={firstFailedTaskRef}
            firstFailedTaskId={firstFailedTaskId}
            />
        </div>
    )
}

export default Todo