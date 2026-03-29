import { useEffect, useState, useRef, useContext } from "react"

import SearchTaskForm from '../SearchTaskForm/SearchTaskForm'
import AddTaskForm from '../AddTaskForm/AddTaskForm'
import TodoInfo from '../TodoInfo/TodoInfo'
import TodoList from '../TodoList/TodoList'
import Button from "../Button/Button"
import './Todo.css'

import { TasksContext } from "../../context/TasksContext"


const Todo = () => {
    const {firstFailedTaskRef} = useContext(TasksContext)
    
    return (
        <div className="container">
            <h1 className="title">TodoList</h1>
            <AddTaskForm />
            <SearchTaskForm/>
            <TodoInfo/>
            <Button
            onClick={() => firstFailedTaskRef.current?.scrollIntoView({behavior: "smooth"})}
            >
                Show first failed task
            </Button>
            
            
            <TodoList/>
        </div>
        
    )
}

export default Todo