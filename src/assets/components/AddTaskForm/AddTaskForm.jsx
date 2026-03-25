import Field from "../Field/Field"
import Button from "../Button/Button"

const AddTaskForm = () => {
    return (
        <form>
            <Field 
            type="text"
            placeholder="Введите новую задачу"
            />
            <Button
            title="Добавить"
            type="submit"
            />
        </form>
    )
}

export default AddTaskForm