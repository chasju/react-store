import Search from "../Components/Search";
import Styles from "../styles/Theme/Theme.module.css";

export default function Home() {
  return (
    <div className={Styles.bodyContainer}>
      <Search />
    </div>
  );
}
