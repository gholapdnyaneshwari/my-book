import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./views/Home/Home";
import About from "./views/About/About";
import Contact from "./views/Contact/Contact";
import OurService from "./views/OurService/OurService";
import NotFound from "./views/NotFound/NotFound";
const root = createRoot(document.getElementById("root"));
root.render(
 <BrowserRouter>
 <Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/about" element={<About/>}/>
  <Route path="/contact" element={<Contact/>}/>
  <Route path="/ourservice" element={<OurService/>}/>
  <Route path="*" element={<NotFound/>}/>
 </Routes>
 </BrowserRouter>
);
