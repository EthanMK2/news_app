import classes from "./App.module.css";
import HeadlineNews from "./pages/HeadlineNews";
import Profile from "./pages/Profile";

import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <header className={classes.header}>
        <ul className={classes["header-nav"]}>
          <li className={classes["header-nav-li"]}>
            <Link to="/" className={classes["header-link"]}>
              <p>Home</p>
            </Link>
          </li>
          <li className={classes["profile-link"]}>
            <Link to="/profile-page" className={classes["header-link"]}>
              <p>Profile</p>
            </Link>
          </li>
          <li className={classes["header-nav-button"]}>
            <button>Logout</button>
          </li>
        </ul>
      </header>
      <Routes>
        <Route path="/" element={<HeadlineNews />} />
        <Route path="/profile-page" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
