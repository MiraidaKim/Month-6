import { useTodos } from "./store/todos";


export default function TodoItem ({ t }) {
    const { toggle, remove } = useTodos()

    return (
        <div className={`todo ${t.done? 'todo-done':''}`}>
            <label>
                <input type="checkbox" checked={t.done} onChange={() => toggle(t.id)} />
                <span>{t.title}</span>
            </label>
            <button className="btn ghost" onClick={() => remove(t.id)}>Удалить</button>
        </div>
    )
} 