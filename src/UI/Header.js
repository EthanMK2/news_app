import { Link } from "react-router-dom";

import classes from "./Header.module.css"

const Header = () => {
  return (
    <header className={classes.header}>
      <ul className={classes["header-nav"]}>
        <li className={classes["header-home"]}>
          <Link to="/" className={classes["header-link"]}>
            <h1>Headline News</h1>
          </Link>
        </li>
        <li className={classes["header-nav-li"]}>
          <Link to="/" className={classes["header-link"]}>
            <p>Entertainment</p>
          </Link>
        </li>
        <li className={classes["header-nav-li"]}>
          <Link to="/" className={classes["header-link"]}>
            <p>Business</p>
          </Link>
        </li>
        <li className={classes["header-nav-li"]}>
          <Link to="/" className={classes["header-link"]}>
            <p>Science</p>
          </Link>
        </li>
        <li className={classes["header-nav-li"]}>
          <Link to="/" className={classes["header-link"]}>
            <p>Technology</p>
          </Link>
        </li>
        <li className={classes["header-nav-li"]}>
          <Link to="/" className={classes["header-link"]}>
            <p>Sports</p>
          </Link>
        </li>
        <li className={classes["header-nav-li"]}>
          <Link to="/" className={classes["header-link"]}>
            <p>Health</p>
          </Link>
        </li>
        <li className={classes["profile-link"]}>
          <Link to="/profile" className={classes["header-link"]}>
            <p>Profile</p>
          </Link>
        </li>
        <li className={classes["header-nav-button"]}>
          <button>Logout</button>
        </li>
      </ul>
    </header>
  );
};

export default Header;
