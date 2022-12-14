import classes from "./App.module.css";
import HeadlineNews from "./pages/HeadlineNews";
import Profile from "./pages/Profile";
import Header from "./UI/Header";

import { Routes, Route, Link } from "react-router-dom";
import CategoryPage from "./pages/CategoryPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HeadlineNews />} />
        <Route path="/entertainment" element={<CategoryPage category="Entertainment" />} />
        <Route path="/business" element={<CategoryPage category="Business" />} />
        <Route path="/science" element={<CategoryPage category="Science" />} />
        <Route path="/technology" element={<CategoryPage category="Technology" />} />
        <Route path="/sports" element={<CategoryPage category="Sports" />} />
        <Route path="/health" element={<CategoryPage category="Health" />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
