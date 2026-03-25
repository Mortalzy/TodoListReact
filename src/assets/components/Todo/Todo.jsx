import SearchTaskForm from '../SearchTaskForm/SearchTaskForm'
import AddTaskForm from '../AddTaskForm/AddTaskForm'
import TodoInfo from '../TodoInfo/TodoInfo'
import TodoList from '../TodoList/TodoList'
import { useState } from "react"

const Todo = () => {

    const [tasks, setNewTask] = useState([
        {id: 'task-1', title: 'Купить молоко', isDone: false},
        {id: 'task-2', title: 'Доделать проект', isDone: true},
        {id: 'task-3', title: 'Погулять с собакой', isDone: false},
    ]) 

    return (
        <div className="container">
            <h1 className="title">TodoList</h1>
            <AddTaskForm />
            <SearchTaskForm />
            <TodoInfo/>
            <TodoList/>
        </div>
    )
}

export default Todo