import React from "react";
import NewsCard from "./NewsCard";

function SavedNews(props) {
  return (
    <>
      {props.saveAricles.length === 0 ? null : (
        <main>
          <section className="elements elements_type_visible">
            {props.saveAricles.map((card, index) => (
              <NewsCard
                saveCard={card}
                key={index}
                loggedIn={props.loggedIn}
                onLogin={props.onLogin}
                saveAricles={props.saveAricles}
                handleDelSaveArticle={props.handleDelSaveArticle}
              />
            ))}
          </section>
        </main>
      )}
    </>
  );
}

export default SavedNews;
