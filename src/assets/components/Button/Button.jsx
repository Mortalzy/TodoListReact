import './Button.css'

const Button = (props) => {
    const {
        className='',
        type,
        title,
        onClick,
        
    } = props

    return (
        <>
            <button 
            className={`add-task-button ${className} `}
            type={type}
            onClick={onClick}
            >
            {title}
            </button>
        </>
       
    )
}
export default Button