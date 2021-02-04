import React from "react";
import { useLocation } from "react-router-dom";

function NewsCard(props) {
  const [isClicked, setIsClicked] = React.useState(false);
  const tipCardRef = React.useRef();
  const saveCardRef = React.useRef();

  const { pathname } = useLocation();

  function handleToolTipCardShow() {
    tipCardRef.current.className =
      "element__save-tip element__save-tip_type_opened";
  }

  function handleToolTipCardHide() {
    tipCardRef.current.className = "element__save-tip";
  }

  function handleSavedCard() {
    saveCardRef.current.className =
      "element__save-card-button element__save-card-button_type_marked";
    setIsClicked(true);
  }

  function handleDelSavedCard() {
    saveCardRef.current.className = "element__save-card-button";
    setIsClicked(false);
  }

  return (
    <div className="element">
      <img
        className="element__image"
        src={props.card.urlToImage}
        alt={props.card.name}
      />
      <div className="element__info">
        <div>
          <span className="element__date">{props.card.date}</span>
          <a className="element__link" href={props.card.link} target="_blank" rel="noreferrer">
            <h4 className="element__title">{props.card.name}</h4>
          </a>
          <p className="element__about">{props.card.about}</p>
        </div>
        <div>
          <a className="element__link" href={props.card.link} target="_blank" rel="noreferrer">
            <span className="element__source">{props.card.source}</span>
          </a>
        </div>
      </div>
      {pathname === "/saved-news" ? (
        <div className="element__tag">
          <p className="element__tag-text">{props.card.keyword}</p>
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
        ref={saveCardRef}
        className={
          pathname === "/saved-news"
            ? "element__save-card-button element__save-card-button_type_saved"
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
            ? !isClicked
              ? handleSavedCard
              : handleDelSavedCard
            : pathname === "/"
            ? props.onLogin
            : undefined
        }
      ></div>
    </div>
  );
}

export default NewsCard;
