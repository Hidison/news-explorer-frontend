import React from "react";
import NewsCard from "./NewsCard";

function NewsCardList(props) {
  const initialCards = [
    {
      name: "Национальное достояние – парки",
      about:
        "В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала складываться система национальных парков – охраняемых территорий, где и сегодня каждый может приобщиться к природе.",
      source: "Лента.ру",
      date: "2 августа, 2019",
      keyword: "Природа",
      link: "/",
      urlToImage:
        "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
    },
    {
      name: "Лесные огоньки: история одной фотографии",
      about:
        "В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала складываться система национальных парков – охраняемых территорий, где и сегодня каждый может приобщиться к природе.",
      source: "Медуза",
      date: "2 августа, 2019",
      keyword: "Тайга",
      link: "/",
      urlToImage:
        "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
    },
    {
      name: "Национальное достояние – парки",
      about:
        "В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала складываться система национальных парков – охраняемых территорий, где и сегодня каждый может приобщиться к природе.",
      source: "Риа",
      date: "2 августа, 2019",
      keyword: "Природа",
      link: "/",
      urlToImage:
        "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
    },
    {
      name: "Национальное достояние – парки",
      about:
        "В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала складываться система национальных парков – охраняемых территорий, где и сегодня каждый может приобщиться к природе.",
      source: "Лента.ру",
      date: "2 августа, 2019",
      keyword: "Тайга",
      link: "/",
      urlToImage:
        "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
    },
    {
      name: "Лесные огоньки: история одной фотографии",
      about:
        "В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала складываться система национальных парков – охраняемых территорий, где и сегодня каждый может приобщиться к природе.",
      source: "Медуза",
      date: "2 августа, 2019",
      keyword: "Природа",
      link: "/",
      urlToImage:
        "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
    },
    {
      name: "Национальное достояние – парки",
      about:
        "В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала складываться система национальных парков – охраняемых территорий, где и сегодня каждый может приобщиться к природе.",
      source: "Риа",
      date: "2 августа, 2019",
      keyword: "Тайга",
      link: "/",
      urlToImage:
        "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
    },
    {
      name: "Национальное достояние – парки",
      about:
        "В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала складываться система национальных парков – охраняемых территорий, где и сегодня каждый может приобщиться к природе.",
      source: "Лента.ру",
      date: "2 августа, 2019",
      keyword: "Природа",
      link: "/",
      urlToImage:
        "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
    },
    {
      name: "Лесные огоньки: история одной фотографии",
      about:
        "В 2016 году Америка отмечала важный юбилей: сто лет назад здесь начала складываться система национальных парков – охраняемых территорий, где и сегодня каждый может приобщиться к природе.",
      source: "Медуза",
      date: "2 августа, 2019",
      keyword: "Тайга",
      link: "/",
      urlToImage:
        "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
    },
  ];

  const renderingCards = initialCards.slice(0, (props.cardsRow + 1) * 3);

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
          />
        ))}
        {renderingCards.length !== initialCards.length && (
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
