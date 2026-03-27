import { useEffect, useState } from "react"
import SearchTaskForm from '../SearchTaskForm/SearchTaskForm'
import AddTaskForm from '../AddTaskForm/AddTaskForm'
import TodoInfo from '../TodoInfo/TodoInfo'
import TodoList from '../TodoList/TodoList'
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
        console.log('Сохраняем tasks: ', tasks)
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }, [tasks])

    

    return (
        <div className="container">
            <h1 className="title">TodoList</h1>
            <AddTaskForm 
            newTaskTitle={newTaskTitle}
            addNewTask={addNewTask}
            setNewTaskTitle={setNewTaskTitle}
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
            
            <TodoList
            tasks={tasks}
            filteredTasks={filteredTasks}
            onDeleteTaskButton={deleteTask}
            onTaskCompleteChange={toggleTaskComlete}
            />
        </div>
    )
}

export default Todo