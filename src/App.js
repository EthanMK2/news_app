import TrendingNews from "./pages/TrendingNews";
import Profile from "./pages/Profile";
import Header from "./UI/Header";
import SearchResults from "./pages/SearchResults";

import { Routes, Route, useNavigate } from "react-router-dom";
import CategoryPage from "./pages/CategoryPage";
import { useState } from "react";

function App() {
  const [searchText, setSearchText] = useState(null);
  const navigate = useNavigate();

  const searchHandler = (text) => {
    setSearchText(text);  // may not update in time for render?
    navigate("/searchresults");
  }

  return (
    <>
      <Header searchHandler={searchHandler} />
      <Routes>
        <Route path="/" element={<TrendingNews />} />
        <Route path="/entertainment" element={<CategoryPage category="Entertainment" />} />
        <Route path="/business" element={<CategoryPage category="Business" />} />
        <Route path="/science" element={<CategoryPage category="Science" />} />
        <Route path="/technology" element={<CategoryPage category="Technology" />} />
        <Route path="/sports" element={<CategoryPage category="Sports" />} />
        <Route path="/health" element={<CategoryPage category="Health" />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/searchresults" element={<SearchResults searchQuery={searchText} />} />
      </Routes>
    </>
  );
}

export default App;
