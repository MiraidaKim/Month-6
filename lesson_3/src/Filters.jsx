import { useTodos } from "./store/todos"


export default function Filters() {

    const { filter, setFilter, search, setSearch } = useTodos()

    return (
        <div className="filters">
            <div className="chipset">
                {['all', 'active', 'done'].map(f => {
                    <button key={f} className={`chip ${filter === f ?'chip-active':''}`} onClick={() => setFilter(f)}>{f}</button>
                })}
            </div>
            <input 
                className="input"
                placeholder="Поиск..."
                value={search}
                onChange={e => setSearch(e.target.value)}
            />
        </div>
    )
}