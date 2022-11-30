import classes from "./HeadlineNews.module.css";
import Category from "../UI/Category";

const HeadlineNews = () => {
  const apiData = [
    {
      image: {
        thumbnail: {
          contentUrl: "https://www.bing.com/th?id=OVFT.i3HFPHxjI_Hrtc_ocDDh-C&pid=News"
        }
      },
      name: "Layoffs mount: Twitter, tech, biotech firms chop 900-plus Bay Area jobs",
      description:
        "Twitter and other companies have unveiled plans to chop more than 900 Bay Area jobs in a fresh round of tech and biotech layoffs that could jolt the region’s increasingly wobbly economy. In recent",
    },
    {
      image: {
        thumbnail: {
          contentUrl: "https://www.bing.com/th?id=OVFT.i3HFPHxjI_Hrtc_ocDDh-C&pid=News"
        }
      },
      name: "Layoffs mount: Twitter, tech, biotech firms chop 900-plus Bay Area jobs",
      description:
        "Twitter and other companies have unveiled plans to chop more than 900 Bay Area jobs in a fresh round of tech and biotech layoffs that could jolt the region’s increasingly wobbly economy. In recent",
    },
    {
      image: {
        thumbnail: {
          contentUrl: "https://www.bing.com/th?id=OVFT.i3HFPHxjI_Hrtc_ocDDh-C&pid=News"
        }
      },
      name: "Layoffs mount: Twitter, tech, biotech firms chop 900-plus Bay Area jobs",
      description:
        "Twitter and other companies have unveiled plans to chop more than 900 Bay Area jobs in a fresh round of tech and biotech layoffs that could jolt the region’s increasingly wobbly economy. In recent",
    },
    
  ];

  return (
    <div className={classes.main}>
      <Category data={apiData} />
    </div>
  );
};

export default HeadlineNews;
