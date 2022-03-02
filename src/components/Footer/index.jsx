import React from "react";
import { BsGithub, BsFacebook, BsLinkedin } from "react-icons/bs";

export function Footer() {
  return (
    <footer className="footer-component text-center">
      <div className="icons-footer-container">
        <ul>
          <li>
            <a href="https://github.com/ChristoferGuimaraes" target="_blank">
              <BsGithub />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/christofer-guimar%C3%A3es-351149218/" target="_blank">
              <BsLinkedin />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/christofer.guimaraes/" target="_blank">
              <BsFacebook />
            </a>
          </li>
        </ul>
      </div>
      <p className="footer-copy">
        Copyright &copy; Christofer Guimarães 2022
      </p>
    </footer>
  );
}
