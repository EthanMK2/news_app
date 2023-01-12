import classes from "./NewsCard.module.css";
import placeholerImage from "../assets/images/image_placeholder.png";
import { useContext } from "react";
import AuthContext from "../store/auth-context";

const NewsCard = (props) => {
  const authCtx = useContext(AuthContext);

  const postArticle = (data) => {
    if (authCtx.uid) {
      fetch(
        `https://react-http-practice-4c42c-default-rtdb.firebaseio.com/users/${authCtx.uid}.json`,
        {
          method: "PUT",
          body: JSON.stringify({ articles: data }),
        }
      );
    }
  };

  let description = props.description;

  if (description.charAt(description.length - 1) !== ".") {
    description += " ...";
  }

  const image = props.imageLink ? (
    <img
      src={props.imageLink}
      className={classes.image}
      alt="News story cover"
    />
  ) : (
    <img
      src={placeholerImage}
      alt="placeholder newspaper"
      className={classes.image}
    />
  );
  const providerImage = props.providerImageLink ? (
    <img
      src={props.providerImageLink}
      className={classes["provider-image"]}
      alt="News outlet logo"
    ></img>
  ) : (
    <img
      src={placeholerImage}
      alt="placeholder newspaper"
      className={classes["provider-image"]}
    />
  );

  return (
    <div
      className={classes.card}
      onClick={() => {
        const data = {
          name: props.name,
          description: props.description,
          url: props.url
        };
        if (JSON.parse(localStorage.getItem("articles"))) {
          const oldData = JSON.parse(localStorage.getItem("articles"));
          localStorage.setItem("articles", JSON.stringify([data, ...oldData]));
        } else {
          localStorage.setItem("articles", JSON.stringify([data]));
        }
        postArticle(JSON.parse(localStorage.getItem("articles")));
        window.open(props.url, "_blank");
      }}
    >
      {image}
      <p className={classes.name}>{props.name}</p>
      <hr className={classes.divider} />
      <p className={classes.description}>{description}</p>
      <div className={classes.provider}>
        {providerImage}
        <span className={classes["provider-name"]}>{props.providerName}</span>
      </div>
    </div>
  );
};

export default NewsCard;
