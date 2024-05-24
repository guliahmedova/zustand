import create from 'zustand';

const useUserStore = create((set) => ({
  data: null,
  loading: false,
  error: null,
  fetchData: async () => {
    set({ loading: true, error: null });
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const result = await response.json();
      set({ data: result, loading: false });
    } catch (error) {
      set({ error: (error instanceof Error ? error.message : 'An unknown error occurred'), loading: false });
    }
  }
}));

export default useUserStore;