import "./App.css";
import Scroll from "./components/SmoothScroll";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Services from "./pages/Services/Services";

function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      {/* <About /> */}
      <Scroll />
      <Services />
    </div>
  );
}

export default App;
