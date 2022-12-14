import { Link } from "react-router-dom";

import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <ul className={classes["header-nav"]}>
        <li className={classes["header-home"]}>
          <Link to="/" className={classes["header-link"]}>
            <h1>News Website</h1>
          </Link>
        </li>

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
