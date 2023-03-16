import styles from "../styles/Card.module.css";
import heartStyle from "../styles/Cards.module.css";
import theme from "../styles/Theme/Theme.module.css";
import errorStyles from "../styles/ErrorMessage.module.css";
import loaderStyles from "../styles/Loader.module.css";
import useApiWithId from "../API/useApiWithId";
import { Link, useParams } from "react-router-dom";
import ToggleHeart from "./ToggleHeart";
import image from "../images/placeholder.jpg";

export default function Card() {
  //   let params = useParams();

  //   const { post, isLoading, isError } = useApiWithId(`https://api.noroff.dev/api/v1/online-shop/${params.id}`);

  //   if (isLoading) {
  //     return <div className={loaderStyles.loader}></div>;
  //   }

  //   if (isError) {
  //     <div className={errorStyles.errorContainer}>
  //       <p className={errorStyles.errorMessage}>There was an error loading the content. Please contact us if the issue persists.</p>
  //     </div>;
  //   }

  return (
    <div className={theme.bodyContainer}>
      <div className={styles.imageContainer}>
        <img src={image} alt="it here the " />
        <img src={image} alt="it here the " />
        <img src={image} alt="it here the " />
        <img src={image} alt="it here the " />
      </div>
      <div>
        <h1>Title</h1>
        <div>
          <p>Old price</p>
          <p>new price</p>
          <p>discount</p>
        </div>
      </div>
      <div>
        <button>Add to Cart</button>
        <i onClick={ToggleHeart} className={`${heartStyle.heart} fa-regular fa-heart`}></i>
      </div>
      <p>Reviews</p>
      <h2>Description</h2>
      <p>Placeholder text please. There is no way that I am memorising the lore epsom text. </p>
      <h2>
        Reviews <span>(2)</span>{" "}
      </h2>
      <div>
        <div>
          <h3>Charlie</h3>
          <p>Stars</p>
        </div>
        <p>Placeholder text please. There is no way that I am memorising the lore epsom text. </p>
      </div>
      <div>
        <div>
          <h3>Karen</h3>
          <p>Stars</p>
        </div>
        <p>Placeholder text please. There is no way that I am memorising the lore epsom text. </p>
      </div>
    </div>
  );
}
