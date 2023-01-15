import React from "react";
import possibilityImage from "../../assets/transparent.gif";
import transthree from "../../assets/transthree.gif";
import transtwo from "../../assets/transtwo.gif";
import "./provide.css";
const Provide = () => (
  <div className="immi__possiblity-main section__padding">
    <div className="immi__possibility-content-heading ">
      <h1 className="gradient__text">
        One relocation platform <br /> meeting all your needs
      </h1>
    </div>
    <div className="immi__possibility " id="possibility">
      <div className="immi__possibility-content">
        <h1 className="gradient__text">Full transparency</h1>
        <p>
          Live dashboard overviewing the full process, tracking your progress
          and estimating the completion time
        </p>
      </div>
      <div className="immi__possibility-image">
        <img src={possibilityImage} alt="possibility" />
      </div>
    </div>

    <div className="immi__possibility " id="possibility">
      <div className="immi__possibility-content">
        <h1 className="gradient__text">Guided process</h1>
        <p>
          Data-driven suggestions on every single step of your case. Our expert
          guides, case and documents examples, and tips will support you along
          the way. You won't feel lost wondering what you should write or what
          document you have to submit
        </p>
      </div>
      <div className="immi__possibility-image">
        <img src={transtwo} alt="possibility" />
      </div>
    </div>

    <div className="immi__possibility " id="possibility">
      <div className="immi__possibility-content">
        <h1 className="gradient__text">Guided process</h1>
        <p>
          Data-driven suggestions on every single step of your case. Our expert
          guides, case and documents examples, and tips will support you along
          the way. You won't feel lost wondering what you should write or what
          document you have to submit
        </p>
      </div>
      <div className="immi__possibility-image">
        <img src={possibilityImage} alt="possibility" />
      </div>
    </div>
  </div>
);

export default Provide;
