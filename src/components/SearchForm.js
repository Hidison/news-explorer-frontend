import React from "react";
import * as NewsApi from "../utils/NewsApi.js";

function SearchForm(props) {
  const [searchWord, setSearchWord] = React.useState("");
  const searchRef = React.useRef();
  const errorTextRef = React.useRef();

  function handleChangeSearchWord(e) {
    setSearchWord(e.target.value);
  }

  function handleShowCard() {
    props.cardsRow(0);
    NewsApi.getNewsArticles(searchWord)
      .then((res) => {
        if (res) {
          const news = res.articles.map((item) => ({ ...item, searchWord }));
          if (news.length === 0) {
            props.notFoundRef.current.className =
              "not-found not-found_type_visible";
            searchRef.current.value = " ";
          } else {
            props.notFoundRef.current.className = "not-found";
            props.setArticles(news);
            localStorage.setItem("articles", JSON.stringify(news));
            props.elementsRef.current.className =
              "elements elements_type_visible";
            searchRef.current.value = " ";
          }
          props.preloaderRef.current.className = "preloader";
        } else {
          props.setFailedFetch(true);
        }
      })
      .catch((err) => {
        console.log(`Ошибка: ${err}`);
      });
  }

  function handleSubmit(e) {
    localStorage.removeItem("articles");
    e.preventDefault();
    if (!searchRef.current.value) {
      errorTextRef.current.className =
        "search-form__error-text search-form__error-text_type_visible";
    } else {
      props.preloaderRef.current.className = "preloader preloader_type_visible";
      errorTextRef.current.className = "search-form__error-text";
      props.notFoundRef.current.className = "not-found";
      props.elementsRef.current.className = "elements";
      handleShowCard();
    }
  }

  return (
    <form className="search-form" onSubmit={handleSubmit} noValidate>
      <fieldset className="search-form__set">
        <span className="search-form__error-text" ref={errorTextRef}>
          Нужно ввести ключевое слово
        </span>
        <input
          type="url"
          name="link"
          value={searchWord || ""}
          placeholder="Введите тему новости"
          className="search-form__text"
          ref={searchRef}
          onChange={handleChangeSearchWord}
          id="url-input"
          autoComplete="off"
          required
        />
        <input type="submit" value="Искать" className="search-form__submit" />
      </fieldset>
    </form>
  );
}

export default SearchForm;
