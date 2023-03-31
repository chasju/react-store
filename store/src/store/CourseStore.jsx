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
  incrementProduct: (productId) => {
    set((state) => ({
      products: [
        ...state.products,

        state.products.find((product) => {
          console.log(product.id, productId);
          // Tried to make this work, but didn't have time to work on it in the end.
          return product.id === productId ? product.count + 1 : product.count;
        }),
      ],
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
