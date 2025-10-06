import { useDispatch, useSelector } from "react-redux";
import { selectFilters } from '../features/characters/selectors'
import { setName, setSpecies, setStatus } from "../features/characters/charactersSlice";

export default function Filters() {
    const dispatch = useDispatch()
    const { name, status, species } = useSelector(selectFilters)

    return (
        <section className="filters">
            <input 
                className="input"
                placeholder="Поиск по имени..."
                value={name}
                onChange={(e) => dispatch(setName(e.target.value))}
            />
            <select className="select" value={status} onChange={(e) => dispatch(setStatus(e.target.value))}>
                <option value="all">Статус: любой</option>
                <option value="alive">Живые</option>
                <option value="dead">Мертвые</option>
                <option value="unknown">Неизвестные</option>
            </select>
            <input
                className="input"
                placeholder="Species (человек, инопланетянин...)"
                value={species}
                onChange={(e) => dispatch(setSpecies(e.target.value))}
            />
        </section>
    )
}