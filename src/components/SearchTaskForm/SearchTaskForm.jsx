import { useContext } from 'react'
import Field from '../Field/Field'
import './SearchTaskForm.css'
import { TasksContext } from '../../context/TasksContext'

const SearchTaskForm = (props) => {
    const {
        searchQuery,
        setSearchQuery,
    } = useContext(TasksContext)

    return (
        <form className="search-task-form">
            <Field
            className="field" 
            type="text"
            placeholder="Search task"
            value={searchQuery}
            onInput={(event) => setSearchQuery(event.target.value)}
            />
            <img className="search-task-img"
            src="src/assets/icons/search-task__icon.png" alt="search-task__icon" />
        </form>
            
       
    )
}

export default SearchTaskForm