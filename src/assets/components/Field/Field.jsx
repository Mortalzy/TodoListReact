const Field = (props) => {
    const {
        type,
        placeholder,
        className="",
        value,
        onInput,
        ref,
    } = props

    return (
        <>
            <input
            className={className}
            type={type}
            value={value}
            placeholder={placeholder}
            onInput={onInput}
            ref={ref}
            />
        </>
    )
}

export default Field