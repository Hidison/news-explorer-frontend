import React from "react";
import gitHubIcon from "../images/git_hub.svg";
import facebookIcon from "../images/facebook.svg";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__copyright">
        &copy; 2020 Supersite, Powered by News API
      </p>
      <ul className="footer__links">
        <li className="footer__list">
          <a className="footer__link" href="/">Главная</a>
        </li>
        <li className="footer__list">
          <a className="footer__link" href="https://praktikum.yandex.ru" target="_blank" rel="noreferrer">Яндекс.Практикум</a>
        </li>
        <li className="footer__list">
          <a className="footer__link" href="https://github.com/Hidison" target="_blank" rel="noreferrer">
            <img src={gitHubIcon} alt="иконка GitHub" />
          </a>
        </li>
        <li className="footer__list">
          <a className="footer__link" href="https://www.facebook.com/profile.php?id=100008088619214" target="_blank" rel="noreferrer">
            <img src={facebookIcon} alt="иконка Facebook" />
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
