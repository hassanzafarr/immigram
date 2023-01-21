import React from "react";

import image from "../../assets/aboutlogo.png";

import "./stream.css";
const Stream = () => (
  <div
    className="about__blog section__padding"
    id="blog"
    style={{
      backgroundImage: `url(${image})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "contain",
    }}
  >
    <div className="about__blog-heading">
      <h1 className="gradient__text">
        Streamlining the immigration process for you
      </h1>
      <p>
        We assist you in shaping your future and simplify your experience. Our
        expensive cliente continues to expand, and we look forward to
        establishing a bechmark in the Immigration and Visa services market
      </p>
    </div>
  </div>
);

export default Stream;
