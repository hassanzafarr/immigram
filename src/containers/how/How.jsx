import React from "react";
//Insted of this we use
//import Article from "../../components/article/Article";
import Article from "../../components/howitworks/howcom";

import "./how.css";
const Blog = () => (
  <div className="immi__blog section__padding" id="blog">
    <div className="immi__blog-heading">
      <h1 className="gradient__text">How it works</h1>
    </div>
    <div className="immi__blog-container">
      <div className="immi__blog-container_groupB">
        <Article
          text="Evaluate your chances?"
          number="1"
          para="Guided support from the platform to help you shape your unique story. Collection and smart review of all your data with automated feedback and smart suggestions"
        />
        <Article
          text="Build a winning case"
          number="2"
          para="Guided support from the platform to help you shape your unique story. Collection and smart review of all your data with automated feedback and smart suggestions"
        />
        <Article
          text="Get your visa"
          number="3"
          para="One-stop account for any further needs. Access various post-visa adaptation services with our partners. Finding a flat? Opening a bank account? You can count on us"
        />
        <Article
          text="Settle in a new country"
          number="4"
          para="data-driven scoring system helps predict your eligibility with 98% accuracy. Take a test to start your immigration journey"
        />
      </div>
    </div>
  </div>
);

export default Blog;
