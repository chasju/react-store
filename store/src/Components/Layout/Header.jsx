import styles from "../../styles/Layout/Header.module.css";

export default function Header() {
  return (
    <header>
      <div className={styles.burger}>...</div>
      <h1>LOGO</h1>
      <div className={styles.shoppingBag}>BAG</div>
    </header>
  );
}
