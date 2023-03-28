import styles from "../styles/Cards.module.css";

export default function Banner(props) {
  const calc = ((props.oldPrice - props.discountedPrice) / props.oldPrice) * 100;

  const discount = calc.toFixed(0);

  console.log(discount);

  return <div className={props.oldPrice > props.discountedPrice ? `${styles.banner}` : ""}>{props.oldPrice > props.discountedPrice ? `${discount}%` : ""}</div>;
}
