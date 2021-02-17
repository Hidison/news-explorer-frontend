import React from "react";
import notFoundIcon from "../images/not-found-icon.svg";

function NotFoundCard(props) {

  return (
    <section className="not-found" ref={props.notFoundRef}>
      <img className="not-found__image" src={notFoundIcon} alt="не найдено" />
      <h4 className="not-found__title">
        {!props.failedFetch
          ? "Ничего не найдено"
          : "Во время запроса произошла ошибка"}
      </h4>
      <p className="not-found__subtitle">
        {!props.failedFetch
          ? "К сожалению по вашему запросу ничего не найдено."
          : "Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз"}
      </p>
    </section>
  );
}

export default NotFoundCard;
