import './Button.css'

const Button = (props) => {
    const {
        className='',
        type,
        onClick,

        children
        
    } = props

    return (
        <>
            <button 
            className={`add-task-button ${className} `}
            type={type}
            onClick={onClick}
            >
            {children}
            </button>
        </>
       
    )
}
export default Button