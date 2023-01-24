import placeholderImage from "../assets/images/image_placeholder.png";
import classes from "./TrendingCard.module.css";

const TrendingCard = (props) => {
  return (
    <article
      className={classes.card}
      onClick={() => {
        window.open(props.url, "_blank");
      }}
    >
      {props?.image ? (
        <img src={props.image} className={classes.image} alt="news story" />
      ) : (
        <img src={placeholderImage} className={classes.image} alt="placeholder" />
      )}
      <h2 className={classes.name}>{props.name}</h2>
    </article>
  );
};

export default TrendingCard;
