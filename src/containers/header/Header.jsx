import React from "react";
import image from "../../assets/banner-image.png";
import "./header.css";

const Header = () => (
  <div
    className="immi__header section__padding"
    id="home"
    style={{
      backgroundImage: `url(${image})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    }}
  >
    <div className="immi__header-content">
      <h1 className="gradient__text">
        The <span class="future">Future</span> of <br />
        Relocation is <span class="future">Tech</span>
      </h1>
      <p>
        Facilitating the adaptation, integration, and pursuit of <br />
        possiblities of immigrants
      </p>

      <div className="immi__header-content__input">
        <button type="button">Calculate Your Chances</button>
      </div>
    </div>
  </div>
);

export default Header;
