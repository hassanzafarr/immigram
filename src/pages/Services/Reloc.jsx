import React from "react";

import image from "../../assets/line.png";

import "./reloc.css";
const Reloc = () => (
  <div
    className="services__blog section__padding"
    id="blog"
    style={{
      backgroundImage: `url(${image})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    }}
  >
    <div className="services__blog-heading ">
      <h1 className="gradient__text">What to expect ?</h1>
      <p>
        Our advisor are committed to being readily accessible to our clients,
        Our modern office is equipped with cutting-edge tools and means of
        communication to help us move your request along quickly no matter where
        you are located in the world. We promise to alwats be forth right and
        honest with you. You are important to us since you are a part of Fanuun
      </p>
      <div className="services__reloc-content">
        <h1>Why Fanuun</h1>
        <p>
          We are here for you every step of the journey, and out decades of
          experience will gurantee that you receive the best advice possible
        </p>

        <h2>Accurate Guidance</h2>
        <p>
          Our business consultants, attorneys, accountants, and SME's come from
          a variety of industries in order to assist and support you
        </p>

        <h2>Asserting Out Presence</h2>
        <p>
          With out existing presence in Canada, the United States, the United
          Kingdom, the Middle East, and South Asia, as well as out imminent
          expansion plans to new regions and we are able to reach the right
          individuals for the right programs around the worlds
        </p>
      </div>
    </div>
  </div>
);

export default Reloc;
