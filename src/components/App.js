import React from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import SavedNewsHeader from "./SavedNewsHeader";
import Main from "./Main";
import Footer from "./Footer";
import LoginPopup from "./LoginPopup";
import RegisterPopup from "./RegisterPopup";
import InfoTooltip from "./InfoTooltip";

function App() {
  const [cardsRow, setCardsRow] = React.useState(0);
  const [isLoginPopupOpen, setLoginPopupOpen] = React.useState(false);
  const [isMobile, setisMobile] = React.useState(false);
  const [isRegisterPopupOpen, setRegisterPopupOpen] = React.useState(false);
  const [isInfoTooltipPopupOpen, setInfoTooltipPopupOpen] = React.useState(
    false
  );
  const [loggedIn, setloggedIn] = React.useState(false);
  const elementsRef = React.useRef();
  const preloaderRef = React.useRef();
  const notFoundRef = React.useRef();

  const { pathname } = useLocation();

  function handleLoginClick() {
    setisMobile(false);
    setLoginPopupOpen(true);
    window.addEventListener("keyup", handleClosePopupEsc);
    window.addEventListener("mousedown", handlerClosePopupMousedown);
  }

  function handleMoveToMobile() {
    if (isMobile) {
      setisMobile(false);
    } else {
      setisMobile(true);
    }
  }

  function handleClosePopupEsc(e) {
    if (e.keyCode === 27) {
      closeAllPopups();
    }
  }

  function handlerClosePopupMousedown(e) {
    if (e.target.classList.contains("popup_opened")) {
      closeAllPopups();
    }
  }

  function handlMoveToRegister() {
    setLoginPopupOpen(false);
    setRegisterPopupOpen(true);
  }

  function handlMoveToLogin() {
    setRegisterPopupOpen(false);
    setInfoTooltipPopupOpen(false);
    setLoginPopupOpen(true);
  }

  function closeAllPopups() {
    setLoginPopupOpen(false);
    setRegisterPopupOpen(false);
    setInfoTooltipPopupOpen(false);
    window.removeEventListener("keyup", handleClosePopupEsc);
    window.removeEventListener("mousedown", handlerClosePopupMousedown);
  }

  function handleRegisterSubmitClick() {
    setRegisterPopupOpen(false);
    setInfoTooltipPopupOpen(true);
  }

  function showMoreCards() {
    setCardsRow(cardsRow + 1);
  }

  function handleLogin() {
    closeAllPopups();
    setloggedIn(true);
  }

  function handleLogout() {
    setloggedIn(false);
  }

  return (
    <div className="page">
      {pathname === "/" ? (
        <Header
          loggedIn={loggedIn}
          onLogin={handleLoginClick}
          onMobile={handleMoveToMobile}
          isMobile={isMobile}
          elementsRef={elementsRef}
          preloaderRef={preloaderRef}
          notFoundRef={notFoundRef}
          cardsRow={setCardsRow}
        />
      ) : (
        <SavedNewsHeader
          onMobile={handleMoveToMobile}
          isMobile={isMobile}
          loggedIn={loggedIn}
          onLogin={handleLoginClick}
          handleLogout={handleLogout}
        />
      )}
      <Main
        loggedIn={loggedIn}
        onLogin={handleLoginClick}
        showMoreCards={showMoreCards}
        cardsRow={cardsRow}
        elementsRef={elementsRef}
        preloaderRef={preloaderRef}
        notFoundRef={notFoundRef}
      />
      <Footer />
      <LoginPopup
        isOpen={isLoginPopupOpen}
        onClose={closeAllPopups}
        moveRegister={handlMoveToRegister}
        handleLogin={handleLogin}
      />
      <RegisterPopup
        isOpen={isRegisterPopupOpen}
        onClose={closeAllPopups}
        moveLogin={handlMoveToLogin}
        onSubmitClick={handleRegisterSubmitClick}
      />
      <InfoTooltip
        isOpen={isInfoTooltipPopupOpen}
        onClose={closeAllPopups}
        moveLogin={handlMoveToLogin}
      />
    </div>
  );
}

export default App;
