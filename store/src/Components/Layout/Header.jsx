import styles from "../../styles/Layout/Header.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

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
      <p className={styles.brand}>STOREit</p>
      <div className={styles.shoppingBag}>
        <Link to="/checkout">
          <i class="fa-solid fa-bag-shopping"></i>
        </Link>
      </div>
    </header>
  );
}
