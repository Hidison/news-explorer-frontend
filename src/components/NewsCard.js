import React from "react";
import { useLocation } from "react-router-dom";

function NewsCard(props) {
  const dateFormat = require("dateformat");
  dateFormat.i18n = {
    monthNames: [
      "января",
      "февраля",
      "марта",
      "апреля",
      "мая",
      "июня",
      "июля",
      "августа",
      "сентября",
      "октября",
      "ноября",
      "декабря",
    ],
  };
  const tipCardRef = React.useRef();
  const { pathname } = useLocation();

  function handleToolTipCardShow() {
    tipCardRef.current.className =
      "element__save-tip element__save-tip_type_opened";
  }

  function handleToolTipCardHide() {
    tipCardRef.current.className = "element__save-tip";
  }

  function handleSavedCard() {
    props.handleSaveArticles({
      keyword: props.card.searchWord,
      title: props.card.title,
      text: props.card.description,
      date: props.card.publishedAt,
      source: props.card.source.name,
      link: props.card.url,
      image: props.card.urlToImage,
    });
  }

  function handleDelSavedCard() {
    props.handleDelSaveArticle(props.saveCard);
  }

  return (
    <div className="element">
      <img
        className="element__image"
        src={
          pathname === "/saved-news"
            ? props.saveCard.image
            : props.card.urlToImage
        }
        alt={
          pathname === "/saved-news" ? props.saveCard.title : props.card.title
        }
      />
      <div className="element__info">
        <div>
          <span className="element__date">
            {pathname === "/saved-news"
              ? `${dateFormat(new Date(props.saveCard.date), "d mmm, yyyy")}`
              : `${dateFormat(
                  new Date(props.card.publishedAt),
                  "d mmm, yyyy"
                )}`}
          </span>
          <a
            className="element__link"
            href={
              pathname === "/saved-news" ? props.saveCard.link : props.card.url
            }
            target="_blank"
            rel="noreferrer"
          >
            <h4 className="element__title">
              {pathname === "/saved-news"
                ? props.saveCard.title
                : props.card.title}
            </h4>
          </a>
          <p className="element__about">
            {pathname === "/saved-news"
              ? props.saveCard.text
              : props.card.description}
          </p>
        </div>
        <div>
          <a
            className="element__link"
            href={
              pathname === "/saved-news" ? props.saveCard.link : props.card.url
            }
            target="_blank"
            rel="noreferrer"
          >
            <span className="element__source">
              {pathname === "/saved-news"
                ? props.saveCard.source
                : props.card.source.name}
            </span>
          </a>
        </div>
      </div>
      {pathname === "/saved-news" ? (
        <div className="element__tag">
          <p className="element__tag-text">{props.saveCard.keyword}</p>
        </div>
      ) : null}
      <div className="element__save-tip" ref={tipCardRef}>
        <p
          className={
            pathname === "/saved-news"
              ? "element__save-tip-text element__save-tip-text_type_del-card"
              : "element__save-tip-text"
          }
        >
          {pathname === "/saved-news"
            ? "Убрать из сохранённых"
            : "Войдите, чтобы сохранять статьи"}
        </p>
      </div>
      <div
        className={
          pathname === "/saved-news"
            ? "element__save-card-button element__save-card-button_type_saved"
            : !props.loggedIn
            ? "element__save-card-button"
            : props.saveAricles.some((с) => с.title === props.card.title)
            ? "element__save-card-button element__save-card-button_type_marked"
            : "element__save-card-button"
        }
        onPointerEnter={
          pathname === "/"
            ? !props.loggedIn
              ? handleToolTipCardShow
              : undefined
            : pathname === "/saved-news"
            ? handleToolTipCardShow
            : undefined
        }
        onPointerLeave={
          pathname === "/"
            ? !props.loggedIn
              ? handleToolTipCardHide
              : undefined
            : pathname === "/saved-news"
            ? handleToolTipCardHide
            : undefined
        }
        onClick={
          props.loggedIn
            ? pathname === "/"
              ? handleSavedCard
              : handleDelSavedCard
            : props.onLogin
        }
      ></div>
    </div>
  );
}

export default NewsCard;
