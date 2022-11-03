import React from "react";
import Header from "./Header";
import Body from "./Body";
import { Routes, Route } from "react-router-dom";
import Pricing from "../pages/Pricing";
import About from "../pages/About";
import Home from "../pages/Home";
import History from "../pages/History";
import Ourteam from "../pages/Ourteam";
import Blog from "../pages/Blog";
import Campaigns from "../pages/Campaigns";
import Creative from "../pages/Creative";
import Seo from "../pages/Seo";
import Sales from "../pages/Sales";
import Info from "../pages/Info";
import Contact from "../pages/Contact";
import Submitted from "../pages/Submitted";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="/pricing" element={<Pricing />} />
      <Route path="/history" element={<History />} />
      <Route path="/ourteam" element={<Ourteam />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/campaigns" element={<Campaigns />} />
      <Route path="/creative" element={<Creative />} />
      <Route path="/seo" element={<Seo />} />
      <Route path="/sales" element={<Sales />} />
      <Route path="/submitted" element={<Submitted />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
