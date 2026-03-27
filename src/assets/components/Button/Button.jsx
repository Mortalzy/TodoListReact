import './Button.css'

const Button = (props) => {
    const {
        className='',
        type,
        title,
        
    } = props

    return (
        <>
            <button 
            className={className}
            type={type}
            >
            {title}
            </button>
        </>
       
    )
}
export default Button