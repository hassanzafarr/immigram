import React from "react";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";
import "./header.css";

const Header = () => (
  <div className="immi__header section__padding" id="home">
    <div className="immi__header-content">
      {/* <div className="immi__header-content__people">
        <img src={people} />
      </div> */}
      <h1 className="gradient__text">The future of relocation is tech</h1>
      <p>
        Helping the brightest IT specialists move to the UK, settle and connect
        with opportunities since 2019
      </p>

      <div className="immi__header-content__input">
        <button type="button">Calculate Your Chances</button>
      </div>
    </div>
  </div>
);

export default Header;
