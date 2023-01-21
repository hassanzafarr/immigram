import React from "react";

import "./home.css";
import {
  Blog,
  Header,
  Provide,
  Footer,
  WhyFanuun,
  Process,
} from "../../containers";

import { Navbar, Brand, CTA } from "../../components";
// import Scroll from "../../components/SmoothScroll";

const Home = () => (
  <div className="home-main">
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

export default Home;
