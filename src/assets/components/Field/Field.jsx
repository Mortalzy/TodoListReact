const Field = (props) => {
    const {
        type,
        placeholder,
        className="",
        value,
        onInput
    } = props

    return (
        <>
            <input
            className={className}
            type={type}
            value={value}
            placeholder={placeholder}
            onInput={onInput}
            />
        </>
    )
}

export default Field