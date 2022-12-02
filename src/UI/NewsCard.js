import classes from "./NewsCard.module.css"

const NewsCard = (props) => {

  let description = props.description

  if (description.charAt(description.length - 1) !== ".") {
    description += " ..."
  }

  const image = props.imageLink ? <img src={props.imageLink} className={classes.image} /> : "";

  return (
    <div className={classes.card} onClick={() => {window.open(props.url, '_blank')}}>
      {image}
      <p className={classes.name}>{props.name}</p>
      <hr className={classes.divider} />
      <p className={classes.description}>{description}</p>
    </div>
  );
};

export default NewsCard;
