import React from "react";
import Navigation from "./Navigation";

function SavedNewsHeader(props) {
  const keywords = props.loggedIn
    ? props.saveAricles.map((card) => card.keyword)
    : [];

  const sortedКeywords = keywords
    .map((word) => {
      const card = {};
      card.keyword = word;
      card.sum = keywords.filter((a) => a === word).length;
      return card;
    })
    .sort((a, b) => b.sum - a.sum)
    .map((card) => card.keyword);

  const uniqueКeywords = sortedКeywords.filter((item, pos) => {
    return sortedКeywords.indexOf(item) === pos;
  });

  return (
    <header className="header">
      <Navigation
        loggedIn={props.loggedIn}
        onMobile={props.onMobile}
        isMobile={props.isMobile}
        userData={props.userData}
        onSignOut={props.onSignOut}
      />
      <>
        <span className="header__name">Сохранённые статьи</span>
        <h1 className="header__title_type_dark">
          {props.userData.name}, у вас{" "}
          {props.saveAricles.length === 0 ? "нет" : props.saveAricles.length}{" "}
          сохранённых статей
        </h1>
        {props.saveAricles.length === 0 ? null : (
          <p
            className={
              !props.isMobile
                ? `header__subtitle header__subtitle_type_dark`
                : `header__subtitle header__subtitle_type_dark header__subtitle_type_mobile`
            }
          >
            По ключевым словам:{" "}
            <span className="header__subtitle_type_bold-text">
              {uniqueКeywords.length <= 3
                ? uniqueКeywords.join(", ")
                : uniqueКeywords.slice(0, 2).join(", ")}
            </span>{" "}
            {uniqueКeywords.length <= 3 ? null : (
              <>
                и{" "}
                <span className="header__subtitle_type_bold-text">
                  {(uniqueКeywords.slice(2).length >=10 && uniqueКeywords.slice(2).length <=20) ||
                  uniqueКeywords.slice(2).length.toString().endsWith("5") ||
                  uniqueКeywords.slice(2).length.toString().endsWith("6") ||
                  uniqueКeywords.slice(2).length.toString().endsWith("7") ||
                  uniqueКeywords.slice(2).length.toString().endsWith("8") ||
                  uniqueКeywords.slice(2).length.toString().endsWith("9")
                    ? uniqueКeywords.slice(2).length + "-и другим"
                    : uniqueКeywords.slice(2).length + "-м другим"}
                </span>
              </>
            )}
          </p>
        )}
      </>
    </header>
  );
}

export default SavedNewsHeader;
