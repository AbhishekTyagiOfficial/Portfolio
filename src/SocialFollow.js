import React from "react";
import "./App.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
export default function SocialFollow() {
  return (
    <div className="social-container text-start">
      <div className="row">
        <div className="col-md-3 col-sm-1 col-xs-1 my-2">
          <a className="youtube social ">
            <FontAwesomeIcon icon={faYoutube} size="2x " />
          </a>
        </div>

        <div className="col-md-3 col-sm-1 col-xs-1 my-2">
          <a className="facebook social ">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
        </div>

        <div className="col-md-3 col-sm-1 col-xs-1 my-2">
          <a className="twitter social ">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
        </div>

        <div className="col-md-3 col-sm-1 col-xs-1 my-2">
          <a className="instagram social ">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
        </div>
      </div>
    </div>
  );
}
