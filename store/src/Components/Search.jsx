import styles from "../styles/Search.module.css";
import cardStyles from "../styles/Cards.module.css";
import errorStyles from "../styles/ErrorMessage.module.css";
import loaderStyles from "../styles/Loader.module.css";
import React, { useState } from "react";
import useApi from "../API/useApi";
import { Link } from "react-router-dom";
import HandleLike from "./HandleLike";
import Banner from "./DiscountBanner";

export default function Search() {
  const [searchInput, setSearchInput] = useState("");
  const { posts, isLoading, isError } = useApi("https://api.noroff.dev/api/v1/online-shop");

  if (isLoading) {
    return <div className={loaderStyles.loader}></div>;
  }

  if (isError) {
    <div className={errorStyles.errorContainer}>
      <p className={errorStyles.errorMessage}>There was an error loading the content. Please contact us if the issue persists.</p>
    </div>;
  }

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  if (searchInput.length > 0) {
    posts.filter((post) => {
      return post.title.match(searchInput);
    });
  }

  return (
    <div>
      <form action="submit">
        <i className={`${styles.searchIcon} fa-solid fa-magnifying-glass`}></i>
        <input onChange={handleChange} type="text" name="searchInput" placeholder="Search" autoComplete="off" />
      </form>
      <h1>Products</h1>
      {/* <div className={Styles.filterButtonContainer}>
        <button className={Styles.filterButton}>Filter</button>
      </div> */}
      <div className={cardStyles.cardContainer}>
        {posts
          .filter((post) => {
            if (searchInput === "") {
              return post;
            } else if (post.title.toLowerCase().includes(searchInput.toLowerCase())) {
              return post;
            } else {
              return "";
            }
          })
          .map((post) => {
            return (
              <div className={cardStyles.card} key={post.id}>
                <div className={cardStyles.imageContainer}>
                  <Link to={`product/${post.id}`}>
                    <img src={post.imageUrl} alt={post.title} />
                    <Banner discountedPrice={post.discountedPrice} oldPrice={post.price} />
                  </Link>
                </div>
                <div className={cardStyles.flexBetween}>
                  <Link to={`product/${post.id}`}>
                    <h2 className={cardStyles.title}>{post.title}</h2>
                  </Link>
                  <HandleLike />
                </div>
                <p className={cardStyles.price}>{post.discountedPrice} NOK</p>
                <p className={cardStyles.oldPrice}>{post.price > post.discountedPrice ? post.price + " NOK" : ""}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
}
