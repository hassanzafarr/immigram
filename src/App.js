import "./App.css";
import Scroll from "./components/SmoothScroll";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Services from "./pages/Services/Services";
import Career from "./pages/Career/Career";
import USvisa from "./pages/US/US";
import UKvisa from "./pages/UK/UK";
import Contact from "./pages/Contact/Contact";

function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      <Scroll />
      {/* <Services /> */}
      {/* <About /> */}
      {/* <Career /> */}
      {/* <USvisa /> */}
      {/* <UKvisa /> */}
      <Contact />
    </div>
  );
}

export default App;
