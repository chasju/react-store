import styles from "../styles/Cards.module.css";
import errorStyles from "../styles/ErrorMessage.module.css";
import loaderStyles from "../styles/Loader.module.css";
import useApi from "../API/useApi";
import { Link } from "react-router-dom";
import ToggleHeart from "./ToggleHeart";

export default function Cards() {
  const { posts, isLoading, isError } = useApi("https://api.noroff.dev/api/v1/online-shop");

  if (isLoading) {
    return <div className={loaderStyles.loader}></div>;
  }

  if (isError) {
    <div className={errorStyles.errorContainer}>
      <p className={errorStyles.errorMessage}>There was an error loading the content. Please contact us if the issue persists.</p>
    </div>;
  }

  return (
    <div className={styles.cardContainer}>
      {posts.map((post) => (
        <div className={styles.card} key={post.id}>
          <Link to={`product/${post.id}`}>
            <img src={post.imageUrl} alt={post.title} />
          </Link>
          <div className={styles.flexBetween}>
            <Link to={`product/${post.id}`}>
              <h2 className={styles.title}>{post.title}</h2>
            </Link>
            <i onClick={ToggleHeart} className={`${styles.heart} fa-regular fa-heart`}></i>
          </div>

          <p className={styles.price}>{post.discountedPrice} NOK</p>
        </div>
      ))}
    </div>
  );
}
