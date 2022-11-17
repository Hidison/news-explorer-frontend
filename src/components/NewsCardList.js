import React from "react";
import NewsCard from "./NewsCard";

function NewsCardList(props) {
  const news = props.articles;

  const renderingCards = news.slice(0, (props.cardsRow + 1) * 3);

  return (
    <>
      <section className="elements" ref={props.elementsRef}>
        <h3 className="elements__title">Результаты поиска</h3>
        {renderingCards.map((card, index) => (
          <NewsCard
            card={card}
            key={index}
            loggedIn={props.loggedIn}
            onLogin={props.onLogin}
            handleSaveArticles={props.handleSaveArticles}
            saveAricles={props.saveAricles}
          />
        ))}
        {renderingCards.length !== news.length && (
          <button
            type="button"
            className="elements__button-show-more"
            onClick={props.showMoreCards}
          >
            Показать ещё
          </button>
        )}
      </section>
    </>
  );
}

export default NewsCardList;
