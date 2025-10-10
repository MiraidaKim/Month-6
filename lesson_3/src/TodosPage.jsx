import { useState } from "react";
import { useTodos } from "./store/todos";
import TodoInput from "./TodoInput";
import TodoItem from "./TodoItem";

export default function TodosPage() {
  const { items, filter, search } = useTodos();
  const [dateFilter, setDateFilter] = useState(""); 


//    фильтр дата 
  const list = items
    .filter(
      (t) => filter === "all" || (filter === "active" ? !t.done : t.done)
    )
    .filter((t) => t.title.toLowerCase().includes(search.toLowerCase()))
    .filter((t) =>
      dateFilter ? t.createdAt.slice(0, 10) === dateFilter : true
    ); 

  const done = items.filter((t) => t.done).length;

  return (
    <section>
      <div className="title-row">
        <h2>Задачи</h2>
        <span className="muted">
          Всего: {items.length} / Вып: {done}
        </span>
      </div>
      <TodoInput />
      <input
        type="date"
        value={dateFilter}
        onChange={(e) => setDateFilter(e.target.value)}
        style={{ margin: "10px 0", padding: "6px" }}
      />
      {list.length === 0 && <p className="muted">Пусто. Добавьте задачу.</p>}
      <div className="list">
        {list.map((t) => (
          <TodoItem key={t.id} t={t} />
        ))}
      </div>
    </section>
  );
}
