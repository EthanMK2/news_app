import NewsCard from "./NewsCard";
import classes from "./Category.module.css";

const Category = (props) => {
  const newsList = props.data.map((story) => {
    return (
      <li className={classes["news-card-li"]}>
        <NewsCard
          url={story.url}
          imageLink={
            story.image.thumbnail.contentUrl
              ? story.image.thumbnail.contentUrl
              : null
          }
          providerImageLink={
            story.provider[0].image.thumbnail.contentUrl
              ? story.provider[0].image.thumbnail.contentUrl
              : null
          }
          providerName={story.provider[0].name ? story.provider[0].name : ""}
          name={story.name}
          description={story.description}
        />
      </li>
    );
  });
  return (
    <>
      <h2 className={classes.title}>{props.title}</h2>
      <ul className={classes["card-ul"]}>{newsList}</ul>
    </>
  );
};

export default Category;
