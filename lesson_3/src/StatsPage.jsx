import { useTodos } from "./store/todos";

export default function StatsPage() {
  const { items, markAllDone, removeDone } = useTodos();

  const total = items.length;
  const done = items.filter((t) => t.done).length;
  const active = total - done;

  return (
    <section>
      <h2>Статистика</h2>
      <div className="stats">
        <div className="stat">
          <div className="stat-num">{total}</div>
          <div className="stat-label">Всего задач</div>
        </div>
        <div className="stat">
          <div className="stat-num">{active}</div>
          <div className="stat-label">Активные</div>
        </div>
        <div className="stat">
          <div className="stat-num">{done}</div>
          <div className="stat-label">Выполненные</div>
        </div>
      </div>

      <div style={{ marginTop: "20px", display: "flex", gap: "10px" }}>
        <button className="btn" onClick={markAllDone}>
          Отметить все выполненными
        </button>
        <button className="btn ghost" onClick={removeDone}>
          Удалить выполненные
        </button>
      </div>
    </section>
  );
}
