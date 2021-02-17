import React from "react";
import Navigation from "./Navigation";
import SearchForm from "./SearchForm";

function Header(props) {
  return (
    <header className="header_type_image">
      <Navigation
        onLogin={props.onLogin}
        loggedIn={props.loggedIn}
        onMobile={props.onMobile}
        isMobile={props.isMobile}
        userData={props.userData}
        onSignOut={props.onSignOut}
      />
      <>
        <h1
          className={
            !props.isMobile
              ? `header__title`
              : `header__title header__title_type_mobile`
          }
        >
          Что творится в мире?
        </h1>
        <p className="header__subtitle">
          Находите самые свежие статьи на любую тему и сохраняйте в своём личном
          кабинете.
        </p>
      </>
      <SearchForm
        handleChangeSearchWord={props.handleChangeSearchWord}
        elementsRef={props.elementsRef}
        preloaderRef={props.preloaderRef}
        notFoundRef={props.notFoundRef}
        cardsRow={props.cardsRow}
        setArticles={props.setArticles}
        setFailedFetch={props.setFailedFetch}
      />
    </header>
  );
}

export default Header;
