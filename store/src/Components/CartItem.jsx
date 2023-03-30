import React, { useState } from "react";
import styles from "../styles/ProductList.module.css";

export default function CartItem({ product, id, removeProduct }) {
  const [count, setCount] = useState(1);

  function increment() {
    setCount(count + 1);
  }
  function decrement() {
    setCount(count - 1);
  }

  return (
    <React.Fragment key={id}>
      <li className={styles.list}>
        <div className={styles.productContainer}>
          <div className={styles.imageContainer}>
            <img src={product.image} alt={product.title} />
          </div>
          <div className={styles.titleContainer}>
            <h2 className={styles.title}>{product.title}</h2>
            <div className={styles.countContainer}>
              <button className={styles.countButton} onClick={decrement}>
                <i className="fa-solid fa-minus"></i>
              </button>
              <p className={styles.count}>{count < 0 ? setCount(0) : count}</p>
              <button className={styles.countButton} onClick={increment}>
                <i className="fa-solid fa-plus"></i>
              </button>
            </div>
          </div>
          <div className={styles.priceContainer}>
            <p className={styles.oldPrice}>{product.oldPrice} NOK</p>
            <p className={styles.newPrice}>{product.discountedPrice} NOK</p>
            <button
              className={styles.trash}
              onClick={() => {
                removeProduct(product.id);
              }}
            >
              <i className={`fa-solid fa-trash-can`}></i>
            </button>
          </div>
        </div>
      </li>
    </React.Fragment>
  );
}
