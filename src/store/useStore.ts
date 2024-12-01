import { create } from 'zustand';

interface SearchFilters {
  location: string;
  checkIn: Date | null;
  checkOut: Date | null;
  guests: number;
  priceRange: [number, number];
  propertyType: string;
}

interface StoreState {
  isSearchModalOpen: boolean;
  isLoginModalOpen: boolean;
  isFilterModalOpen: boolean;
  searchFilters: SearchFilters;
  setSearchModalOpen: (isOpen: boolean) => void;
  setLoginModalOpen: (isOpen: boolean) => void;
  setFilterModalOpen: (isOpen: boolean) => void;
  updateSearchFilters: (filters: Partial<SearchFilters>) => void;
}

export const useStore = create<StoreState>((set) => ({
  isSearchModalOpen: false,
  isLoginModalOpen: false,
  isFilterModalOpen: false,
  searchFilters: {
    location: '',
    checkIn: null,
    checkOut: null,
    guests: 1,
    priceRange: [0, 1000],
    propertyType: 'All',
  },
  setSearchModalOpen: (isOpen) => set({ isSearchModalOpen: isOpen }),
  setLoginModalOpen: (isOpen) => set({ isLoginModalOpen: isOpen }),
  setFilterModalOpen: (isOpen) => set({ isFilterModalOpen: isOpen }),
  updateSearchFilters: (filters) =>
    set((state) => ({
      searchFilters: { ...state.searchFilters, ...filters },
    })),
}));