import React from "react";
import About from "./About.js";
import NewsCardList from "./NewsCardList";
import Preloader from "./Preloader";
import NotFoundCard from "./NotFoundCard";

function Main(props) {
  return (
    <main>
      <Preloader preloaderRef={props.preloaderRef} />
      <NotFoundCard notFoundRef={props.notFoundRef} failedFetch={props.failedFetch} />
      <NewsCardList
        onLogin={props.onLogin}
        loggedIn={props.loggedIn}
        cardsRow={props.cardsRow}
        showMoreCards={props.showMoreCards}
        elementsRef={props.elementsRef}
        articles={props.articles}
        saveAricles={props.saveAricles}
        handleSaveArticles={props.handleSaveArticles}
      />
      <section className="about">
        <About />
      </section>
    </main>
  );
}

export default Main;
