import classes from "./TrendingNews.module.css";
import { useEffect, useState } from "react";
import TrendingCard from "../UI/TrendingCard";

const HeadlineNews = () => {
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
      "https://bing-news-search1.p.rapidapi.com/news/trendingtopics?textFormat=Raw&safeSearch=Strict",
      options
    )
      .then((response) => response.json())
      .then((result) => {
        let arr;
        arr = result.value;
        console.log(result);
        setNewsArray(arr);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  console.log("mounted");

  const newsList = newsArray?.map((story) => {

    return (
      <li className={classes["news-card-li"]} key={Math.random()}>
        <TrendingCard
          image={story?.image?.url}
          name={story?.name}
          url={story?.newsSearchUrl}
        />
      </li>
    );
  });

  // for loading or when no results appear
  let mainListClasses = `${classes.main}`;

  if (newsList.length < 1) {
    mainListClasses = `${classes["empty-main"]}`;
  }

  return (
    <>
      <h1 className={classes.title}>Trending News</h1>
      <main className={mainListClasses}>
        <ul className={classes.list}>{newsList}</ul>
      </main>
    </>
  );
};

export default HeadlineNews;
