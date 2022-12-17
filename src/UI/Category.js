import classes from "./Category.module.css";

const Category = (props) => {

  return (
    <>
      <ul className={classes["card-ul"]}>{props.newsList}</ul>
    </>
  );
};

export default Category;
