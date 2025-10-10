import { NavLink } from "react-router-dom";


export default function Header() {

    return (
        <header className="header">
            <div className="brand">Zustand Todo</div>
            <nav className="nav">
                <NavLink to={'/'} end className={({isActive}) => isActive ? 'link active' : 'link'}>Задачи</NavLink>
                <NavLink to={'/stats'} className={({isActive}) => isActive ? 'link active' : 'link'}>Статистика</NavLink>
            </nav>
        </header>
    )
}
