import styles from "../../styles/Layout/Header.module.css";

export default function Header() {
  return (
    <header>
      <div className={styles.burger}>...</div>
      <p>LOGO</p>
      <div className={styles.shoppingBag}>BAG</div>
    </header>
  );
}
