import React, { useState } from "react";
import useProductStore from "../store/CourseStore";
import styles from "../styles/ProductList.module.css";

export default function CartItem({ product, id, removeProduct }) {
  let discountedPrice = product.discountedPrice;
  let oldPrice = product.oldPrice;

  const [count, setCount] = useState(product.count);
  const [productTotal, setProductTotal] = useState(discountedPrice * product.count);
  const [oldProductTotal, setOldProductTotal] = useState(oldPrice * product.count);
  const [isDisabled, setIsDisabled] = useState(product?.count > 1 ? false : true);

  const updateCount = useProductStore((state) => state.updateCount);

  function increment() {
    const newCount = count + 1;
    setCount(newCount);
    updateCount(product.id, newCount);

    const total = product.discountedPrice * newCount;
    const oldPrice = product.oldPrice * newCount;

    setProductTotal(total);
    setOldProductTotal(oldPrice);

    setIsDisabled(false);
  }

  function decrement() {
    const newCount = count - 1;
    setCount(newCount);
    updateCount(product.id, newCount);

    const total = productTotal - product.discountedPrice;
    const oldPrice = oldProductTotal - product.oldPrice;
    setProductTotal(total);
    setOldProductTotal(oldPrice);

    newCount === 1 ? setIsDisabled(true) : setIsDisabled(false);
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
              <button disabled={isDisabled} className={styles.countButton} onClick={decrement}>
                <i className="fa-solid fa-minus"></i>
              </button>
              <p className={styles.count}>{product.count}</p>
              <button className={styles.countButton} onClick={increment}>
                <i className="fa-solid fa-plus"></i>
              </button>
            </div>
          </div>
          <div className={styles.priceContainer}>
            <p className={styles.oldPrice}>{product.oldPrice > product.discountedPrice ? oldProductTotal.toFixed(2) + " NOK" : ""}</p>
            <p className={styles.newPrice}>{productTotal.toFixed(2)} NOK</p>
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
