import classes from "./HeadlineNews.module.css";
import NewsCard from "../UI/NewsCard";

const HeadlineNews = () => {
  return (
    <div className={classes.main}>
      <NewsCard
        url={
          "https://www.msn.com/en-us/money/other/apple-hobbled-a-crucial-tool-of-dissent-in-china-weeks-before-widespread-protests-broke-out/ar-AA14Cdti"
        }
        imageLink={
          "https://www.bing.com/th?id=OVFT.MHRCwdfamN9NeUeQpNR11i&pid=News"
        }
        name={
          "Apple hobbled a crucial tool of dissent in China weeks before widespread protests broke out"
        }
        description={
          "Anti-government protests flared in several Chinese cities and on college campuses over the weekend. But the country’s most widespread show of public dissent in decades will have to manage without a"
        }
      />
    </div>
  );
};

export default HeadlineNews;
