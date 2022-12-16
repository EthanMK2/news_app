import classes from "./Category.module.css";

const Category = (props) => {

  return (
    <>
      <h2 className={classes.title}>{props?.title ? props.title : ""}</h2>
      <ul className={classes["card-ul"]}>{props.newsList}</ul>
    </>
  );
};

export default Category;
