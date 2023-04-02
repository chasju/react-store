import { Link } from "react-router-dom";
import styles from "../../styles/Layout/Footer.module.css";

export default function Footer() {
  return (
    <div className={styles.container}>
      <Link to="/contact">&copy; Copyright STOREit</Link>
    </div>
  );
}
