import './Button.css'

const Button = (props) => {
    const {
        className='',
        type,
        onClick,
        isDisabled,
        children
        
    } = props

    return (
        <>
            <button 
            className={`add-task-button ${className} `}
            type={type}
            onClick={onClick}
            disabled={isDisabled}
            >
            {children}
            </button>
        </>
       
    )
}
export default Button