import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Project from "./pages/Project";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sertificate from "./pages/Sertificate";
import FinanceReport from "./pages/FinanceReport";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project" element={<Project />} />
        <Route path="/sertificate" element={<Sertificate />} />
        <Route path="/fin" element={<FinanceReport />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
