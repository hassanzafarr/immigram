import React from "react";
//Insted of this we use
//import Article from "../../components/article/Article";
import Article from "../../components/howitworks/howcom";
import image from "../../assets/line.png";

import "./how.css";
const Blog = () => (
  <div
    className="immi__blog section__padding"
    id="blog"
    style={{
      backgroundImage: `url(${image})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    }}
  >
    <div className="immi__blog-heading">
      <h1 className="gradient__text">How Fanuun Works</h1>
      <p>
        Our comprehensive vise consultation service can meet all of your
        immigration needs. We'll guide you through the entire moving process and
        help you decide which of the many excellent options is right for you
      </p>
    </div>
    <div className="immi__blog-container">
      <div className="immi__blog-container_groupB">
        <Article
          text="Assess your prospects"
          number="1"
          para="Guided support from the platform to help you shape your unique story. Collection and smart review of all your data with automated feedback and smart suggestions"
        />
        <Article
          text="Develop a compelling request"
          number="2"
          para="Guided support from the platform to help you shape your unique story. Collection and smart review of all your data with automated feedback and smart suggestions"
        />
        <Article
          text="Prepare your visa application"
          number="3"
          para="One-stop account for any further needs. Access various post-visa adaptation services with our partners. Finding a flat? Opening a bank account? You can count on us"
        />
        <Article
          text="Migrate to your desired destination"
          number="4"
          para="data-driven scoring system helps predict your eligibility with 98% accuracy. Take a test to start your immigration journey"
        />
      </div>
    </div>
  </div>
);

export default Blog;
