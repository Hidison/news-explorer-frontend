import React from "react";
import notFoundIcon from "../images/not-found-icon.svg";

function NotFoundCard(props) {
  return (
    <section className="not-found" ref={props.notFoundRef}>
      <img className="not-found__image" src={notFoundIcon} alt="не найдено" />
      <h4 className="not-found__title">Ничего не найдено</h4>
      <p className="not-found__subtitle">
        К сожалению по вашему запросу ничего не найдено.
      </p>
    </section>
  );
}

export default NotFoundCard;
