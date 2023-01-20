import React from "react";

import image from "../../assets/line.png";

import "./expect.css";
const Expect = () => (
  <div
    className="fanuun__blog section__padding"
    id="blog"
    style={{
      backgroundImage: `url(${image})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    }}
  >
    <div className="fanuun__blog-heading">
      <h1 className="gradient__text">How Fanuun Works</h1>
      <p>
        Out comprehensive vise consultation service can meet all of your
        immigration needs. We'll guide you through the entire moving process and
        help you decide which of the many excellent options is right for you
      </p>
    </div>
    </div>
);

export default Expect;