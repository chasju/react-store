import styles from "../styles/ProductPage.module.css";

export default function Reviews(props) {
  return (
    <div>
      {props.reviews?.length > 0 ? (
        <div>
          {props.reviews.map((review) => {
            return (
              <div className={styles.reviewContainer}>
                <div className={styles.ratingContainer}>
                  <h3 className={styles.reviewHeadline}>{review.username}</h3>
                  <p className={styles.reviewHeadline}>Rating: {review.rating}/5</p>
                </div>
                <p>{review.description}</p>
              </div>
            );
          })}
        </div>
      ) : (
        <div>No reviews yet</div>
      )}
    </div>
  );
}
