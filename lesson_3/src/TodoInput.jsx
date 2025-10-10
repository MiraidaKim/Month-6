import { useState } from "react"
import { useTodos } from "./store/todos"


export default function TodoInput() {

    const { add } = useTodos()
    const [ title, setTitle ] = useState('')
    
    const onSubmit = (e) => {
        e.preventDefault()
        if (!title.trim()) return
        add(title)
        setTitle('')
    }

    return (
        <form className="todo-input" onSubmit={onSubmit}>
            <input 
                value={title}
                placeholder="введите название задачи"
                onChange={(e) => setTitle(e.target.value)}
            />
            <button type="submit" className="brn">Добавить</button>
        </form>
    )
}