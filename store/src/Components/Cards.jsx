import styles from "../styles/Card.module.css";
import errorStyles from "../styles/ErrorMessage.module.css";
import loaderStyles from "../styles/Loader.module.css";
import useApi from "../API/useApi";

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
          <img src={post.imageUrl} alt={post.title} />
          <div className={styles.flexBetween}>
            <h2 className={styles.title}>{post.title}</h2>
            <i className={`${styles.heart} fa-regular fa-heart`}></i>
          </div>
          <p className={styles.price}>{post.discountedPrice} NOK</p>
        </div>
      ))}
    </div>
  );
}
