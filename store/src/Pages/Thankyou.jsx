import styles from "../styles/Thankyou.module.css";
import { Link } from "react-router-dom";

export default function Thankyou() {
  console.log("hello");

  return (
    <div className={styles.container}>
      <h1>Thank you for your purchase</h1>
      <div className={styles.information}>
        <p>We will notify you as soon as we pack your order and have it sent to you.</p>
        <Link to="/">
          <p>Continue shopping here</p>
        </Link>
      </div>
    </div>
  );
}
