import { useState, useEffect } from "react";
import NewsCard from "../UI/NewsCard";
import Category from "../UI/Category";

import classes from "./SearchResults.module.css";

const SearchResults = (props) => {
  const [newsArray, setNewsArray] = useState([]);

  useEffect(() => {

    const options = {
      method: "GET",
      headers: {
        "X-BingApis-SDK": "true",
        "X-RapidAPI-Key": "61256fc61bmsh390a91d168300b7p11bb8fjsn00481c67e711",
        "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
      },
    };

    fetch(
        `https://bing-news-search1.p.rapidapi.com/news/search?q=${props.searchQuery}&count=30&freshness=Day&textFormat=Raw&safeSearch=Strict`,
      options
    )
      .then((response) => response.json())
      .then((result) => {
        let arr;
        arr = result.value;
        setNewsArray(arr);
        console.log(arr);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, [props.searchQuery]);

  console.log("mounted");

  const newsList = newsArray?.map((story) => {
    return (
      <li className={classes["news-card-li"]} key={Math.random()}>
        <NewsCard
          url={story.url}
          imageLink={
            story?.image?.thumbnail?.contentUrl
              ? story?.image?.thumbnail?.contentUrl
              : null
          }
          providerImageLink={
            story?.provider[0]?.image?.thumbnail?.contentUrl
              ? story?.provider[0]?.image?.thumbnail?.contentUrl
              : null
          }
          providerName={story?.provider[0].name ? story?.provider[0].name : ""}
          name={story?.name}
          description={story?.description}
        />
      </li>
    );
  });

  // for loading or when no results appear
  let mainListClasses = `${classes.main}`;

  if (newsList.length < 1) {
    mainListClasses = `${classes["empty-main"]}`;
  }

  const searchTitle = props.searchQuery.replace(/%20/g, " ")

  return (
    <div className={mainListClasses}>
      <div className={classes["title-div"]}>
        <h2 className={classes.title}>{`Article results for "${searchTitle}"`}</h2>
      </div>
      <Category newsList={newsList} />
    </div>
  );
};

export default SearchResults;