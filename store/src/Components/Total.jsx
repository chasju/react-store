import useProductStore from "../store/CourseStore";
import styles from "../styles/ProductList.module.css";
import { Link } from "react-router-dom";

export default function Total() {
  const { products, clearCart } = useProductStore((state) => ({
    products: state.products,
    clearCart: state.clearCart,
  }));

  const array = [];

  products.map((product) => {
    const total = product.discountedPrice * product.count;

    return array.push(total);
  });

  const total = array.reduce((a, v) => (a = a + v), 0);

  return (
    <div className={styles.totalContainer}>
      <div className={styles.total}>
        <h4>Total</h4>
        <p>{total.toFixed(2)} NOK</p>
      </div>
      <Link to="/thankyou" onClick={clearCart}>
        <button className={styles.checkoutButton}>CHECKOUT</button>
      </Link>
    </div>
  );
}
