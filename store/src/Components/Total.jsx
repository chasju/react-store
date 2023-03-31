import useProductStore from "../store/CourseStore";
import styles from "../styles/ProductList.module.css";
import { Link } from "react-router-dom";

export default function Total() {
  const { products } = useProductStore((state) => ({
    products: state.products,
  }));

  const array = [];

  products.map((product) => {
    return array.push(product.discountedPrice);
  });

  const total = array.reduce((a, v) => (a = a + v), 0);

  return (
    <div className={styles.totalContainer}>
      <div className={styles.total}>
        <h4>Total</h4>
        <p>{total.toFixed(2)} NOK</p>
      </div>
      <Link to="/thankyou">
        <button className={styles.checkoutButton}>CHECKOUT</button>
      </Link>
    </div>
  );
}
