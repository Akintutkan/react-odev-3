import React, { useEffect, useState } from "react";
import PatikaIcon from "../IconComponent/Patika";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { useCity } from "../../context/CityContext";
function Footer() {
  const [footerPosition, setFooterPosition] = useState("footer-position");
  const { city } = useCity();

  useEffect(() => {
    city && setFooterPosition("");
  }, [city]);
  return (
    <div className={`footer ${footerPosition}`}>
      <div className="footer footer-up">
        <div className="container">
          <div className="row">
            <p className="text-center text-muted">
              <strong>Aşağıdaki </strong>bağlantılardan bana ulaşabilirsiniz.
            </p>
            <div className="col place-items-center">
              <ul className="list-unstyled d-flex flex-wrap justify-content-center">
                <li className="py-3">
                  <a
                    href="https://github.com/Akintutkan"
                    target="blank"
                  >
                    <FontAwesomeIcon icon={faGithub} className="fa-3x px-4" />
                  </a>
                </li>
                <li className="py-3">
                  <a
                    href="https://www.linkedin.com/in/ahmet-akin-tutkan/"
                    target="blank"
                  >
                    <FontAwesomeIcon
                      icon={faLinkedinIn}
                      className="fa-3x px-4"
                    />
                  </a>
                </li>
                <li className="px-4 py-3">
                  <a
                    href="https://app.patika.dev/Akin94"
                    target="blank"
                  >
                    <PatikaIcon />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer footer-down">
        <div className="container">
          <div className="row">
            <div className="col plave-item-center">
              <p className="text-center text-muted py-4">
                Copyright © 2023. All rights reserved. | Designed by Ahmet Akın Tutkan
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;