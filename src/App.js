import TrendingNews from "./pages/TrendingNews";
import Profile from "./pages/Profile";
import Header from "./UI/Header";
import SearchResults from "./pages/SearchResults";
import AuthPage from "./pages/AuthPage";
import Footer from "./UI/Footer";
import NotFound from "./pages/NotFound";

import { Routes, Route, useNavigate } from "react-router-dom";
import CategoryPage from "./pages/CategoryPage";
import { useState, useContext, useEffect } from "react";
import AuthContext from "./store/auth-context";

function App() {
  const [searchText, setSearchText] = useState(null);
  const navigate = useNavigate();

  const authCtx = useContext(AuthContext);

  const searchHandler = (text) => {
    setSearchText(text); 
    navigate("/searchresults");
  }
  
  return (
    <>
      <Routes>
        <Route path="/" element={<><Header searchHandler={searchHandler} /><TrendingNews /><Footer /></>} />
        <Route path="/entertainment" element={<><Header searchHandler={searchHandler} /><CategoryPage category="Entertainment" /><Footer /></>} />
        <Route path="/business" element={<><Header searchHandler={searchHandler} /><CategoryPage category="Business" /><Footer /></>} />
        <Route path="/science" element={<><Header searchHandler={searchHandler} /><CategoryPage category="Science" /><Footer /></>} />
        <Route path="/technology" element={<><Header searchHandler={searchHandler} /><CategoryPage category="Technology" /><Footer /></>} />
        <Route path="/sports" element={<><Header searchHandler={searchHandler} /><CategoryPage category="Sports" /><Footer /></>} />
        <Route path="/health" element={<><Header searchHandler={searchHandler} /><CategoryPage category="Health" /><Footer /></>} />
        <Route path="/profile" element={<><Profile /><Footer /></>} />
        <Route path="/searchresults" element={<><Header searchHandler={searchHandler} /><SearchResults searchQuery={searchText} /><Footer /></>} />
        <Route path="/auth" element={<><AuthPage /><Footer /></>} />
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </>
  );
}

export default App;
