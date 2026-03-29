import { useRef } from "react"

const useIncompleteTaskScroll = (tasks) => {
    const firstFailedTaskRef = useRef(null)
    const firstFailedTaskId = tasks.find( ({isDone}) => !isDone)?.id

    return {
        firstFailedTaskRef,
        firstFailedTaskId,
    }
}

export default useIncompleteTaskScroll