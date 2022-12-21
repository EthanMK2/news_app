import TrendingNews from "./pages/TrendingNews";
import Profile from "./pages/Profile";
import Header from "./UI/Header";
import SearchResults from "./pages/SearchResults";
import AuthPage from "./pages/AuthPage";
import NotFound from "./pages/NotFound";

import { Routes, Route, useNavigate } from "react-router-dom";
import CategoryPage from "./pages/CategoryPage";
import { useState } from "react";

function App() {
  const [searchText, setSearchText] = useState(null);
  const navigate = useNavigate();

  const searchHandler = (text) => {
    setSearchText(text); 
    navigate("/searchresults");
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<><Header searchHandler={searchHandler} /><TrendingNews /></>} />
        <Route path="/entertainment" element={<><Header searchHandler={searchHandler} /><CategoryPage category="Entertainment" /></>} />
        <Route path="/business" element={<><Header searchHandler={searchHandler} /><CategoryPage category="Business" /></>} />
        <Route path="/science" element={<><Header searchHandler={searchHandler} /><CategoryPage category="Science" /></>} />
        <Route path="/technology" element={<><Header searchHandler={searchHandler} /><CategoryPage category="Technology" /></>} />
        <Route path="/sports" element={<><Header searchHandler={searchHandler} /><CategoryPage category="Sports" /></>} />
        <Route path="/health" element={<><Header searchHandler={searchHandler} /><CategoryPage category="Health" /></>} />
        <Route path="/profile" element={<><Header searchHandler={searchHandler} /><Profile /></>} />
        <Route path="/searchresults" element={<><Header searchHandler={searchHandler} /><SearchResults searchQuery={searchText} /></>} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </>
  );
}

export default App;
