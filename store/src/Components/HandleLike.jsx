import styles from "../styles/Cards.module.css";
import { useState } from "react";

export default function HandleLike() {
  const [isLiked, setIsLiked] = useState(false);

  return <i onClick={() => setIsLiked((prevState) => !prevState)} className={isLiked ? `${styles.heart} fa-solid fa-heart` : `${styles.heart} fa-regular fa-heart`}></i>;
}
