import "../styles/Search.module.css";

export default function Search() {
  return (
    <div>
      <form action="submit">
        <i className="fa-solid fa-magnifying-glass"></i>
        <input type="text" name="searchInput" placeholder="Search" />
      </form>
    </div>
  );
}
