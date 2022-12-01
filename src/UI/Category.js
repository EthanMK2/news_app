import react from "react";
import NewsCard from "./NewsCard";
import classes from "./Category.module.css";

const Category = (props) => {
  const newsList = props.data.map((story) => {
    return (
      <li className={classes["news-card-li"]}>
        <NewsCard
          imageLink={story.image.thumbnail.contentUrl}
          name={story.name}
          description={story.description}
        />
      </li>
    );
  });
  return <ul className={classes["card-ul"]}>{newsList}</ul>;
};

export default Category;
