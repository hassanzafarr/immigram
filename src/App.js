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

function App() {
  return (
    <div className="App">
      <Navbar />
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
