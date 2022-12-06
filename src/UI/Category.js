import NewsCard from "./NewsCard";
import classes from "./Category.module.css";
import { useState } from "react";

import { getNewsByCategory } from "../api";

const Category = (props) => {

  return (
    <>
      <h2 className={classes.title}>{props.title}</h2>
      <ul className={classes["card-ul"]}>{props.newsList}</ul>
    </>
  );
};

export default Category;
