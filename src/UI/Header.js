import { useRef, useContext, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import AuthContext from "../store/auth-context";

import classes from "./Header.module.css";

const Header = (props) => {
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();

  const activeLinkHelper = ({isActive}) => {
    return (isActive ? classes["header-nav-active"] : classes["header-navlink"]);
  };

  const searchRef = useRef();

  const searchHandler = (event) => {
    event.preventDefault();

    const currentSearch = searchRef.current.value;
    const searchQuery = currentSearch.replace(/\s/g, "%20");

    props.searchHandler(searchQuery);
  };

  const logoutHandler = () => {
    authCtx.logout();
  }

  const isLoggedIn = authCtx.isLoggedIn;

  return (
    <header className={classes.header}>
      <section className={classes["top-header"]}>
        <div className={classes["header-home"]}>
          <Link to="/" className={classes["header-link"]}>
            <h1>News Website</h1>
          </Link>
        </div>
        {!isLoggedIn ? <div className={classes["profile-links"]}>
          <Link to="/auth" className={classes["header-link"]}>
            <p>Profile</p>
          </Link>
          <button onClick={() => {navigate("/auth")}}>Login</button>
        </div> : <div className={classes["profile-links"]}>
          <Link to="/profile" className={classes["header-link"]}>
            <p>Profile</p>
          </Link>
          <button onClick={logoutHandler}>Logout</button>
        </div>}
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
        <NavLink to="/entertainment" className={activeLinkHelper}>
          <li>
            <p>Entertainment</p>
          </li>
        </NavLink>
        <NavLink to="/business" className={activeLinkHelper}>
          <li>
            <p>Business</p>
          </li>
        </NavLink>
        <NavLink to="/science" className={activeLinkHelper}>
          <li>
            <p>Science</p>
          </li>
        </NavLink>
        <NavLink to="/technology" className={activeLinkHelper}>
          <li>
            <p>Technology</p>
          </li>
        </NavLink>
        <NavLink to="/sports" className={activeLinkHelper}>
          <li>
            <p>Sports</p>
          </li>
        </NavLink>
        <NavLink to="/health" className={activeLinkHelper}>
          <li>
            <p>Health</p>
          </li>
        </NavLink>
      </ul>
    </header>
  );
};

export default Header;
