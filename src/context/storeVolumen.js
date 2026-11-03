import { create } from "zustand";

const storeVolumen = create((set) => ({
  volumen: 50,

  setVolumen: (volumen) => set({ volumen }),

  subirVolumen: () =>
    set((state) => ({ volumen: Math.min(state.volumen + 10, 100) })),

  bajarVolumen: () =>
    set((state) => ({ volumen: Math.max(state.volumen - 10, 0) })),

  resetVolumen: () => set({ volumen: 50 }),
}));

export default storeVolumen;
