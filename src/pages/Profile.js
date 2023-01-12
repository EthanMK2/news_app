import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../store/auth-context";
import classes from "./Profile.module.css";

const Profile = () => {
  const authCtx = useContext(AuthContext);

  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch(
      `https://react-http-practice-4c42c-default-rtdb.firebaseio.com/users/${authCtx.uid}/articles.json`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setArticles(data);
        console.log(data);
      })
      .catch((err) => {
        alert(err.message);
      });
  }, []);

  const articleHistory = articles?.map((article) => {
    return (
      <div className={classes.card}>
        <a href={article.url} target="_blank">
          <h3>{article.name}</h3>
          <p>{article.description}</p>
        </a>
      </div>
    );
  });

  return (
    <>
      <div className={classes["home"]}>
        <Link to="/" className={classes["header-link"]}>
          <h1>News Website</h1>
        </Link>
      </div>

      <div className={classes.main}>
        {articleHistory && <h1>Article Browsing History</h1>}
        {!articles && (
          <div className={classes["no-history"]}>No Article History</div>
        )}
        <div className={classes["article-history"]}>{articleHistory}</div>
      </div>
    </>
  );
};

export default Profile;
