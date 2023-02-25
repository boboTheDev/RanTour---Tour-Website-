import Home from "./pages/home/home.page.js";
import About from "./pages/about/about.page.js";
import Service from "./pages/service/service.page.js";
import Contact from "./pages/contact/contact.page.js";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
