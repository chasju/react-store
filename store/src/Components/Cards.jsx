import styles from "../styles/Cards.module.css";
import errorStyles from "../styles/ErrorMessage.module.css";
import loaderStyles from "../styles/Loader.module.css";
import useApi from "../API/useApi";
import { Link } from "react-router-dom";
import HandleLike from "./HandleLike";
import Banner from "./DiscountBanner";

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
          <div className={styles.imageContainer}>
            <Link to={`product/${post.id}`}>
              <img src={post.imageUrl} alt={post.title} />
              <Banner discountedPrice={post.discountedPrice} oldPrice={post.price} />
            </Link>
          </div>
          <div className={styles.flexBetween}>
            <Link to={`product/${post.id}`}>
              <h2 className={styles.title}>{post.title}</h2>
            </Link>
            <HandleLike />
          </div>
          <p className={styles.price}>{post.discountedPrice} NOK</p>
          <p className={styles.oldPrice}>{post.price > post.discountedPrice ? post.price + " NOK" : ""}</p>
        </div>
      ))}
    </div>
  );
}
