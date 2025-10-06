import { Link } from "react-router-dom";

export default function CharacterCard({c}) {
    return (
        <article className="card">
            <div className="card-thumb">
                <img src={c.image} alt={c.name} loading="lazy" />
            </div>
            <div className="card-body">
                <h3 className="card-title">{c.name}</h3>
                <div className="badge-row">
                    <span className={`badge ${c.status.toLowerCase()}`}>{c.status}</span>
                    <span className="badge ghost">{c.species}</span>
                    {c.type && <span className="badge ghost">{c.type}</span>}
                </div>
                <dl className="meta">
                    <div>
                        <dt>
                            Локация
                        </dt>
                        <dd>
                            {c.location?.name}
                        </dd>
                    </div>
                    <div>
                        <dt>
                            Происхождение
                        </dt>
                        <dd>
                            {c.origin?.name}
                        </dd>
                    </div>
                    <div>
                        <dt>
                            Эпизодов
                        </dt>
                        <dd>
                            {c.episode?.length ?? 0}
                        </dd>
                    </div>
                </dl>
                <Link className="btn" to={`/character/${c.id}`}> 
                    Подробнее
                </Link>
            </div>
        </article>
    )
}