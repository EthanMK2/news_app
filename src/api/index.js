// LEFT OFF HERE
export const getNewsByCategory = () => {
  const options = {
    method: "GET",
    headers: {
      "X-BingApis-SDK": "true",
      "X-RapidAPI-Key": "61256fc61bmsh390a91d168300b7p11bb8fjsn00481c67e711",
      "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
    },
  };

  fetch(
    "https://bing-news-search1.p.rapidapi.com/news?category=Technology&safeSearch=Strict&textFormat=Raw",
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log("THIS => " + typeof Object.values(response.value))
    })
    .catch((err) => console.error(err));
};
