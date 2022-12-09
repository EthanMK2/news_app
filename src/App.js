import classes from "./App.module.css";
import HeadlineNews from "./pages/HeadlineNews";
import Profile from "./pages/Profile";
import Header from "./UI/Header";

import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HeadlineNews />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
