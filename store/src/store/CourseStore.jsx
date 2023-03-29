import { create } from "zustand";

import { devtools, persist } from "zustand/middleware";

const productStore = (set) => ({
  products: [],
  addToCart: (product) => {
    set((state) => ({
      products: [product, ...state.products],
    }));
  },
  removeProduct: (productId) => {
    set((state) => ({
      products: state.products.filter((product) => product.id !== productId),
    }));
  },
  clearCart: () => set({ products: [] }),
});

const useProductStore = create(
  devtools(
    persist(productStore, {
      name: "products",
    })
  )
);

export default useProductStore;
