import "./App.css";
import { Blog, Header, Provide, Footer } from "./containers";
import { Navbar, Brand } from "./components";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Brand />
      <Provide />
      <Blog />

      <Brand />
      <Footer />
    </div>
  );
}

export default App;
