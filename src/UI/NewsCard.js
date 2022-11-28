import classes from "./NewsCard.module.css"

const NewsCard = (props) => {
  const image = props.imageLink ? <img src={props.imageLink} /> : "";

  return (
    <div className={classes.card}>
      {image}
      <h3>{props.name}</h3>
      <p>{props.description}</p>
    </div>
  );
};

export default NewsCard;
