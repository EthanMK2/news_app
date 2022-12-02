import classes from "./HeadlineNews.module.css";
import Category from "../UI/Category";

const HeadlineNews = () => {
  const apiData = [
    {
      image: {
        thumbnail: {
          contentUrl:
            "https://www.bing.com/th?id=OVFT.PYV_stc1fVpzLYOpfa5YkC&pid=News",
        },
      },
      name: "Apple Spent $84,000 on Twitter Ads the Same Day Elon Tweeted It 'Mostly Stopped' Advertising There, New Data Shows",
      url: "https://www.msn.com/en-us/news/technology/apple-spent-84000-on-twitter-ads-the-same-day-elon-tweeted-it-mostly-stopped-advertising-there-new-data-shows/ar-AA14KCag",
      description:
        "On Monday, Elon Musk picked a public fight with Apple, accusing the company of freezing its advertising on Twitter and wondering aloud if the alleged pause was because “they hate free speech in",
    },
    {
      image: {
        thumbnail: {
          contentUrl:
            "https://www.bing.com/th?id=OVFT.PYV_stc1fVpzLYOpfa5YkC&pid=News",
        },
      },
      name: "Apple Spent $84,000 on Twitter Ads the Same Day Elon Tweeted It 'Mostly Stopped' Advertising There, New Data Shows",
      url: "https://www.msn.com/en-us/news/technology/apple-spent-84000-on-twitter-ads-the-same-day-elon-tweeted-it-mostly-stopped-advertising-there-new-data-shows/ar-AA14KCag",
      description:
        "On Monday, Elon Musk picked a public fight with Apple, accusing the company of freezing its advertising on Twitter and wondering aloud if the alleged pause was because “they hate free speech in",
    },
    {
      image: {
        thumbnail: {
          contentUrl:
            "https://www.bing.com/th?id=OVFT.PYV_stc1fVpzLYOpfa5YkC&pid=News",
        },
      },
      name: "Apple Spent $84,000 on Twitter Ads the Same Day Elon Tweeted It 'Mostly Stopped' Advertising There, New Data Shows",
      url: "https://www.msn.com/en-us/news/technology/apple-spent-84000-on-twitter-ads-the-same-day-elon-tweeted-it-mostly-stopped-advertising-there-new-data-shows/ar-AA14KCag",
      description:
        "On Monday, Elon Musk picked a public fight with Apple, accusing the company of freezing its advertising on Twitter and wondering aloud if the alleged pause was because “they hate free speech in",
    },
    
  ];

  return (
    <div className={classes.main}>
      <Category data={apiData} />
      <Category data={apiData} />
      <Category data={apiData} />
      <Category data={apiData} />
    </div>
  );
};

export default HeadlineNews;
