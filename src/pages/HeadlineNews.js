import classes from "./HeadlineNews.module.css";
import Category from "../UI/Category";
import NewsCard from "../UI/NewsCard";
import { useEffect, useState } from "react";

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
        //setNewsArray(arr);  WORK IN PROGRESS
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  console.log("mounted");

  const newsList = newsArray?.map((story) => {
    console.log(story)

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

  return (
    <div className={classes.main}>
      <Category title="Headline News" newsList={newsList} />
    </div>
  );
};

export default HeadlineNews;
