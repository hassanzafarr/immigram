import "./App.css";
import {
  Blog,
  Header,
  Provide,
  Footer,
  WhyFanuun,
  Process,
} from "./containers";
import { Navbar, Brand, CTA } from "./components";
import Scroll from "./components/SmoothScroll";
import About from "./pages/About/About"


function App() {
  return (
    <div className="App">
      {/* <Navbar />
      <Scroll />
      <Header />
      <About />
      <Brand />
      <Process />
      <Blog />
      <Provide />
      <WhyFanuun />
      <CTA />
      <Brand />
      <Footer /> */}

      <Navbar />
      <About />
      {/* <Provide /> */}

      <Scroll />
      <Footer />


    </div>
  );
}

export default App;
