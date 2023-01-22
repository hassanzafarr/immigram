import React from "react";
import "./position.css";
import image from "../../assets/line.png";
import { CiLocationOn, CiClock1 } from "react-icons/ci";
const Position = () => (
  <div
    className="position__container section__padding"
    style={{
      backgroundImage: `url(${image})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    }}
  >
    <div className="position__cta">
      <div className="position__cta-content">
        <div className="position__heading">
          <h3>Head of Finance</h3>
        </div>
        <div className="position__icons">
          <p>
            <CiLocationOn
              style={{ fontSize: "20px", color: "red", marginRight: "0.3rem" }}
            />{" "}
            Remote
          </p>
          <p>
            <CiClock1
              style={{ fontSize: "20px", color: "red", marginRight: "0.3rem" }}
            />{" "}
            Full Time
          </p>
        </div>
      </div>
      <div className="position__cta-btn">
        <button type="button">View More</button>
      </div>
    </div>

    <div className="position__cta">
      <div className="position__cta-content">
        <div className="position__heading">
          <h3>Marketing Director</h3>
        </div>
        <div className="position__icons">
          <p>
            <CiLocationOn
              style={{ fontSize: "20px", color: "red", marginRight: "0.3rem" }}
            />{" "}
            Remote
          </p>
          <p>
            <CiClock1
              style={{ fontSize: "20px", color: "red", marginRight: "0.3rem" }}
            />{" "}
            Full Time
          </p>
        </div>
      </div>
      <div className="position__cta-btn">
        <button type="button">View More</button>
      </div>
    </div>

    <div className="position__cta">
      <div className="position__cta-content">
        <div className="position__heading">
          <h3>Frontend Enigineer</h3>
        </div>
        <div className="position__icons">
          <p>
            <CiLocationOn
              style={{ fontSize: "20px", color: "red", marginRight: "0.3rem" }}
            />{" "}
            Remote
          </p>
          <p>
            <CiClock1
              style={{ fontSize: "20px", color: "red", marginRight: "0.3rem" }}
            />{" "}
            Full Time
          </p>
        </div>
      </div>
      <div className="position__cta-btn">
        <button type="button">View More</button>
      </div>
    </div>
  </div>
);

export default Position;
