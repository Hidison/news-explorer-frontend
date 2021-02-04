import React from "react";
import { Route, Switch } from "react-router-dom";
import About from "./About.js";
import NewsCardList from "./NewsCardList";
import SavedNews from "./SavedNews";
import Preloader from "./Preloader";
import NotFoundCard from "./NotFoundCard";

function Main(props) {
  return (
    <main>
      <Switch>
        <Route exact path="/">
          <Preloader preloaderRef={props.preloaderRef} />
          <NotFoundCard notFoundRef={props.notFoundRef} />
          <NewsCardList
            onLogin={props.onLogin}
            loggedIn={props.loggedIn}
            cardsRow={props.cardsRow}
            showMoreCards={props.showMoreCards}
            elementsRef={props.elementsRef}
          />
        </Route>
        <Route exact path="/saved-news">
          <SavedNews
            onLogin={props.onLogin}
            loggedIn={props.loggedIn}
          />
        </Route>
      </Switch>
      <section className="about">
        <About />
      </section>
    </main>
  );
}

export default Main;
