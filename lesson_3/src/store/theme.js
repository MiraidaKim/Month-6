import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useTheme = create(persist((set) => ({
    theme: 'red',
    toggle: () => set((s) => ({ theme: s.theme === 'red' ? 'black' : 'red'}))
}), { name: 'app-theme'}))