import styles from "../styles/ProductPage.module.css";
import theme from "../styles/Theme/Theme.module.css";
import errorStyles from "../styles/ErrorMessage.module.css";
import loaderStyles from "../styles/Loader.module.css";
import useApiWithId from "../API/useApiWithId";
import { useParams } from "react-router-dom";
import HandleLike from "./HandleLike";
import Banner from "./DiscountBanner";
import Reviews from "./IsReview";

export default function ProductPage() {
  let params = useParams();

  const { post, isLoading, isError } = useApiWithId(`https://api.noroff.dev/api/v1/online-shop/${params.id}`);

  if (isLoading) {
    return <div className={loaderStyles.loader}></div>;
  }

  if (isError) {
    <div className={errorStyles.errorContainer}>
      <p className={errorStyles.errorMessage}>There was an error loading the content. Please contact us if the issue persists.</p>
    </div>;
  }

  return (
    <div className={theme.bodyContainer}>
      <div className={styles.imageContainer}>
        <img src={post.imageUrl} alt={post.title} />
        <Banner discountedPrice={post.discountedPrice} oldPrice={post.price} />
      </div>
      <div>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.priceContainer}>
          <p className={styles.newPrice}>{post.discountedPrice + " NOK"}</p>
          <p className={styles.oldPrice}>{post.price > post.discountedPrice ? post.price + " NOK" : ""}</p>
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.addToCart}>Add to Cart</button>
        <span className={styles.heart}>
          <HandleLike />
        </span>
      </div>
      <h2 className={styles.description}>Description</h2>
      <p>{post.description}</p>
      <h2 className={styles.reviewsTitle}>Reviews</h2>
      <Reviews reviews={post.reviews} />
    </div>
  );
}
