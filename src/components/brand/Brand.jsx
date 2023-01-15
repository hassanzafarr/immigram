import React from "react";
import "./brand.css";
import { google, slack, atlassian, dropbox, shopify } from "./import.js";

export const Brand = () => {
  return (
    <div className="immi__brand-main section__padding">
      <div className="immi__brand-text">
        <p>Trusted by hundreds talents from</p>
      </div>
      <div className="immi__brand ">
        <div>
          <img src={google} />
        </div>
        <div>
          <img src={slack} />
        </div>
        <div>
          <img src={atlassian} />
        </div>
        <div>
          <img src={dropbox} />
        </div>
        <div>
          <img src={shopify} />
        </div>
      </div>
    </div>
  );
};

export default Brand;
