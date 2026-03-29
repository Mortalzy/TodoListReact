import './App.css'
import Todo from "./assets/components/Todo/Todo"
import { TasksProvider } from './assets/context/TasksContext'


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