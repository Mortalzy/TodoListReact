import './App.css'
import Todo from "./components/Todo/Todo"
import { TasksProvider } from './context/TasksContext'


const App = () => {
    return (
        <div className="wrapper">
            <TasksProvider>
                <Todo/>
            </TasksProvider>
        </div>
    )
}

export default App