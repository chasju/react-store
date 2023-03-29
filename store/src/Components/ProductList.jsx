import React from "react";
import useProductStore from "../store/CourseStore";
import styles from "../styles/ProductList.module.css";

const ProductList = () => {
  const { products, removeProduct } = useProductStore((state) => ({
    products: state.products,
    removeProduct: state.removeProduct,
  }));

  return (
    <div className={styles.checkoutContainer}>
      <h1 className={styles.checkoutTitle}>Checkout</h1>
      <ul className={styles.ul}>
        {products.map((product, i) => {
          return (
            <React.Fragment key={i}>
              <li className={styles.list}>
                <div className={styles.productContainer}>
                  <div className={styles.imageContainer}>
                    <img src={product.image} alt={product.title} />
                  </div>
                  <div className={styles.titleContainer}>
                    <h2 className={styles.title}>{product.title}</h2>
                    <div className={styles.countContainer}>
                      <button className={styles.countButton}>
                        <i className="fa-solid fa-minus"></i>
                      </button>
                      <p className={styles.count}>0</p>
                      <button className={styles.countButton}>
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
        })}
      </ul>
    </div>
  );
};

export default ProductList;
