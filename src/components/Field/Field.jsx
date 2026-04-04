import './Field.css'

const Field = (props) => {
    const {
        type,
        placeholder,
        value,
        className='',
        onInput,
        ref,
        error,
    } = props

    return (
        <div className='field'>
            <input
            className={`field__input ${error ? 'is-invalid' : ''} ${className} `}
            type={type}
            value={value}
            placeholder={placeholder}
            onInput={onInput}
            ref={ref}
            />

            {error && (
                <span className="field__error">{error}</span>
            )}
        </div>
    )
}

export default Field