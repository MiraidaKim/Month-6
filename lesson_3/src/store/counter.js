import { create } from "zustand";
import { persist } from "zustand/middleware";


export const useCounter = create(persist((set, get) => ({
    count: 0,
    inc: () => set((s) => ({ count: s.count + 1 })),
    dec: () => set((s) => ({ count: s.count - 1 })),
    reset: () => set({ count: 0 }),
    incBy: (n) => set({ count: get().count + n }),
}), { name: 'counter '}))