import { useRef } from "react";
import { Link } from "react-router-dom";

import classes from "./Header.module.css";

const Header = (props) => {
  const searchRef = useRef();

  const searchHandler = (event) => {
    event.preventDefault();

    const currentSearch = searchRef.current.value;
    const searchQuery = currentSearch.replace(/\s/g, "%20");

    props.searchHandler(searchQuery);
  };

  return (
    <header className={classes.header}>
      <section className={classes["top-header"]}>
        <div className={classes["header-home"]}>
          <Link to="/" className={classes["header-link"]}>
            <h1>News Website</h1>
          </Link>
        </div>
        <div className={classes["profile-links"]}>
          <Link to="/profile" className={classes["header-link"]}>
            <p>Profile</p>
          </Link>
          <button>Logout</button>
        </div>
      </section>
      <form>
        <input
          type="text"
          className={classes.searchbar}
          id="searchbar"
          placeholder="Search for news about..."
          ref={searchRef}
        />
        <button onClick={searchHandler} className={classes["search-button"]}>
          Search
        </button>
      </form>
      <ul className={classes["header-nav"]}>
        <Link to="/entertainment" className={classes["header-link"]}>
          <li className={classes["header-nav-li"]}>
            <p>Entertainment</p>
          </li>
        </Link>
        <Link to="/business" className={classes["header-link"]}>
          <li className={classes["header-nav-li"]}>
            <p>Business</p>
          </li>
        </Link>
        <Link to="/science" className={classes["header-link"]}>
          <li className={classes["header-nav-li"]}>
            <p>Science</p>
          </li>
        </Link>
        <Link to="/technology" className={classes["header-link"]}>
          <li className={classes["header-nav-li"]}>
            <p>Technology</p>
          </li>
        </Link>
        <Link to="/sports" className={classes["header-link"]}>
          <li className={classes["header-nav-li"]}>
            <p>Sports</p>
          </li>
        </Link>
        <Link to="/health" className={classes["header-link"]}>
          <li className={classes["header-nav-li"]}>
            <p>Health</p>
          </li>
        </Link>
      </ul>
    </header>
  );
};

export default Header;
