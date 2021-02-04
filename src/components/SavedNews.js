import React from "react";
import NewsCard from "./NewsCard";

function SavedNews(props) {
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
      }
  ];

  return (
    <>
      <section className="elements elements_type_visible">
        {initialCards.map((card, index) => (
          <NewsCard
            card={card}
            key={index}
            loggedIn={props.loggedIn}
            onLogin={props.onLogin}
          />
        ))}
      </section>
    </>
  );
}

export default SavedNews;
