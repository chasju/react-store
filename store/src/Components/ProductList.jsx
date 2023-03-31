import React from "react";
import useProductStore from "../store/CourseStore";
import styles from "../styles/ProductList.module.css";
import CartItem from "./CartItem";

const ProductList = () => {
  const { products, removeProduct } = useProductStore((state) => ({
    products: state.products,
    removeProduct: state.removeProduct,
  }));

  return (
    <div className={styles.checkoutContainer}>
      <h1 className={styles.checkoutTitle}>Checkout</h1>
      <ul className={styles.ul}>
        {products.map((product) => {
          return <CartItem key={product.id} product={product} id={product.id} removeProduct={removeProduct} />;
        })}
      </ul>
    </div>
  );
};

export default ProductList;
