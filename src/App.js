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

function App() {
  return (
    <div className="App">
      <Navbar />

      <Scroll />
      <Header />
      <Brand />
      <Process />
      <Blog />
      <Provide />
      <WhyFanuun />
      <CTA />
      <Brand />
      <Footer />
    </div>
  );
}

export default App;
