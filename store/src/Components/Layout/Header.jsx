import styles from "../../styles/Layout/Header.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import useProductStore from "../../store/CourseStore";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const { products } = useProductStore((state) => ({
    products: state.products,
  }));

  return (
    <header>
      <div className={`${styles.menu} ${isOpen ? `${styles.open}` : ""}`}>
        <div className={styles.close} onClick={toggleSidebar}>
          <i className="fa-solid fa-xmark"></i>
        </div>
        <nav>
          <ul className={styles.navigation}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className={styles.burger} onClick={toggleSidebar}>
        <i className="fa-solid fa-bars"></i>
      </div>
      <Link to="/">
        <p className={styles.brand}>STOREit</p>
      </Link>
      <div className={styles.shoppingBag}>
        <Link to="/checkout">
          <i className="fa-solid fa-bag-shopping"></i>
          <span className={products?.length > 0 ? styles.cartTotal : ""}>{products?.length > 0 ? products.length : ""}</span>
        </Link>
      </div>
    </header>
  );
}
