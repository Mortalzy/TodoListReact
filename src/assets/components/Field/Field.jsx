const Field = (props) => {
    const {
        type,
        placeholder,
    } = props

    return (
        <>
            <input
            className=""
            type={type}
            placeholder={placeholder} 
            />
        </>
    )
}

export default Field