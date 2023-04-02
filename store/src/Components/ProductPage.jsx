import styles from "../styles/ProductPage.module.css";
import theme from "../styles/Theme/Theme.module.css";
import errorStyles from "../styles/ErrorMessage.module.css";
import loaderStyles from "../styles/Loader.module.css";
import useApiWithId from "../API/useApiWithId";
import { useParams } from "react-router-dom";
import HandleLike from "./HandleLike";
import Banner from "./DiscountBanner";
import Reviews from "./IsReview";
import useProductStore from "../store/CourseStore";
import { useState } from "react";

export default function ProductPage() {
  let params = useParams();

  const { post, isLoading, isError } = useApiWithId(`https://api.noroff.dev/api/v1/online-shop/${params.id}`);

  const addProduct = useProductStore((state) => state.addToCart);
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    setIsAdded(true);
    addProduct({
      id: post.id,
      title: post.title,
      discountedPrice: post.discountedPrice,
      oldPrice: post.price,
      image: post.imageUrl,
    });
  };

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
        <button onClick={handleAddToCart} className={styles.addToCart}>
          {isAdded ? "Added to shopping cart" : "Add to Cart"}
        </button>
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
