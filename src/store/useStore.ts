import { create } from "zustand";

interface StoreState {
  isGetQuotesOpen: boolean;
  openGetQuotes: () => void;
  closeGetQuotes: () => void;
}

export const useStore = create<StoreState>((set) => ({
  isGetQuotesOpen: false,
  openGetQuotes: () => set({ isGetQuotesOpen: true }),
  closeGetQuotes: () => set({ isGetQuotesOpen: false }),
}));
