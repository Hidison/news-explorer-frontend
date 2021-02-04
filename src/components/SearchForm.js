import React from "react";

function SearchForm(props) {
  const [searchWord, setSearchWord] = React.useState("");
  const searchRef = React.useRef();
  const errorTextRef = React.useRef();

  function handleChangeSearchWord(e) {
    setSearchWord(e.target.value);
  }

  function handleShowCard() {
    if (searchRef.current.value === "пусто") {
      props.notFoundRef.current.className = "not-found not-found_type_visible";
    } else {
      props.notFoundRef.current.className = "not-found";
      props.elementsRef.current.className = "elements elements_type_visible";
    }
    props.cardsRow(0);
    props.preloaderRef.current.className = "preloader";
    searchRef.current.value = " ";
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!searchRef.current.value) {
      errorTextRef.current.className =
        "search-form__error-text search-form__error-text_type_visible";
    } else {
      errorTextRef.current.className = "search-form__error-text";
      props.preloaderRef.current.className = "preloader preloader_type_visible";
      props.notFoundRef.current.className = "not-found";
      props.elementsRef.current.className = "elements";
      setTimeout(handleShowCard, 1000);
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
