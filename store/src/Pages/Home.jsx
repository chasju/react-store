import Search from "../Components/Search";
import Styles from "../styles/Theme/Theme.module.css";
import Cards from "../Components/Cards";

export default function Home() {
  return (
    <div className={Styles.bodyContainer}>
      <div>
        <Search />
      </div>
      <h1>Products</h1>
      <div>Filter</div>
      <Cards />
    </div>
  );
}
