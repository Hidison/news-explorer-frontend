import React from "react";
import Navigation from "./Navigation";

function SavedNewsHeader(props) {
  return (
    <header className="header">
      <Navigation
        loggedIn={props.loggedIn}
        handleLogout={props.handleLogout}
        onMobile={props.onMobile}
        isMobile={props.isMobile}
      />
      <>
        <span className="header__name">Сохранённые статьи</span>
        <h1 className="header__title_type_dark">
          Грета, у вас 5 сохранённых статей
        </h1>
        <p
          className={
            !props.isMobile
              ? `header__subtitle header__subtitle_type_dark`
              : `header__subtitle header__subtitle_type_dark header__subtitle_type_mobile`
          }
        >
          По ключевым словам:{" "}
          <span className="header__subtitle_type_bold-text">
            Природа, Тайга
          </span>{" "}
          и <span className="header__subtitle_type_bold-text">2-м другим</span>
        </p>
      </>
    </header>
  );
}

export default SavedNewsHeader;
