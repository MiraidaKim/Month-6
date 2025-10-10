import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

export const useTodos = create(
  devtools(
    persist(
      (set) => ({
        items: [],
        filter: "all", // all | active | done
        search: "",

        //  дата создания
        add: (title) =>
          set(
            (d) => {
              d.items.push({
                id: crypto.randomUUID(),
                title: title.trim(),
                done: false,
                createdAt: new Date().toISOString(), 
              });
            },
            false,
            "todos/add"
          ),

        // Удаление задачи
        remove: (id) =>
          set(
            (d) => {
              d.items = d.items.filter((t) => t.id !== id);
            },
            false,
            "todos/remove"
          ),

        // Переключение 
        toggle: (id) =>
          set(
            (d) => {
              const t = d.items.find((x) => x.id === id);
              if (t) t.done = !t.done;
            },
            false,
            "todos/toggle"
          ),

        // фильтр
        setFilter: (f) => set({ filter: f }, false, "todos/setFilter"),

        // Поиск
        setSearch: (q) => set({ search: q }, false, "todos/setSearch"),

        
        markAllDone: () =>
          set(
            (d) => {
              d.items.forEach((t) => (t.done = true));
            },
            false,
            "todos/markAllDone"
          ),

        
        removeDone: () =>
          set(
            (d) => {
              d.items = d.items.filter((t) => !t.done);
            },
            false,
            "todos/removeDone"
          ),
      }),
      { name: "todos-v1" }
    )
  )
);
