import { create } from "zustand";

import { devtools, persist } from "zustand/middleware";

const localStorageProducts = () => {
  const products = localStorage.getItem("products");
  return products ? JSON.parse(products) : [];
};

const productStore = (set, get) => ({
  products: localStorageProducts,
  addToCart: (product) => {
    // With help from Pretzl
    const products = get().products;
    const index = get().products.findIndex((prod) => prod.id === product.id);

    let updateProducts;
    console.log(index);

    if (index !== -1) {
      const updateProduct = {
        ...products[index],
        count: products[index].count + 1,
      };
      updateProducts = [...products];
      updateProducts[index] = updateProduct;
    } else {
      updateProducts = [...products, { ...product, count: 1 }];
    }

    localStorage.setItem("products", JSON.stringify(updateProducts));

    set({ products: updateProducts });
  },
  removeProduct: (productId) => {
    set((state) => ({
      products: state.products.filter((product) => product.id !== productId),
    }));
  },
  updateCount: (productId, count) => {
    const updatedProducts = get().products.map((product) => {
      if (product.id === productId) {
        return { ...product, count };
      }
      return product;
    });

    localStorage.setItem("products", updatedProducts);
    set({ products: updatedProducts });
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
