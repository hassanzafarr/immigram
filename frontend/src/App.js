import "./App.css";

import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Services from "./pages/Services/Services";
import Career from "./pages/Career/Career";
import USvisa from "./pages/US/US";
import UKvisa from "./pages/UK/UK";
import Contact from "./pages/Contact/Contact";
import Canada from "./pages/Canada/Canada"
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/solutions" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/career" element={<Career />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/uk" element={<UKvisa />} />
        <Route path="/us" element={<USvisa />} />
        <Route path="/canada" element={<Canada />} />
      </Routes>
    </>
  );
}

export default App;