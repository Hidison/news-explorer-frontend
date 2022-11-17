import React from "react";
import {
  useLocation,
  Route,
  Switch,
  Redirect,
  useHistory,
} from "react-router-dom";
import * as MainApi from "../utils/MainApi.js";
import Header from "./Header";
import SavedNewsHeader from "./SavedNewsHeader";
import Main from "./Main";
import SavedNews from "./SavedNews";
import ProtectedRoute from "./ProtectedRoute";
import Footer from "./Footer";
import LoginPopup from "./LoginPopup";
import RegisterPopup from "./RegisterPopup";
import InfoTooltip from "./InfoTooltip";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function App() {
  const [articles, setArticles] = React.useState([]);
  const [saveAricles, setSaveAricles] = React.useState([]);
  const [cardsRow, setCardsRow] = React.useState(0);
  const [isLoginPopupOpen, setLoginPopupOpen] = React.useState(false);
  const [isMobile, setisMobile] = React.useState(false);
  const [isRegisterPopupOpen, setRegisterPopupOpen] = React.useState(false);
  const [isInfoTooltipPopupOpen, setInfoTooltipPopupOpen] = React.useState(
    false
  );
  const [failedFetch, setFailedFetch] = React.useState(false);
  const [loggedIn, setloggedIn] = React.useState(false);
  const elementsRef = React.useRef();
  const preloaderRef = React.useRef();
  const notFoundRef = React.useRef();
  const [userData, setUserData] = React.useState("");
  const [currentUser, setCurrentUser] = React.useState({});

  const { pathname } = useLocation();
  const history = useHistory();

  React.useEffect(() => {
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      MainApi.getContent(jwt).then((res) => {
        if (res) {
          setUserData({
            name: res.data.name,
          });
          setCurrentUser(res.data);
          getSavedArticles();
          setloggedIn(true);
        } else {
          localStorage.removeItem("jwt");
        }
      });
    }
  }, []);

  React.useEffect(() => {
    const articles = JSON.parse(localStorage.getItem("articles"));
    if (pathname === "/" && articles) {
      setArticles(articles);
      elementsRef.current.className = "elements elements_type_visible";
    }
  }, [pathname]);

  function getSavedArticles() {
    MainApi.getSavedArticles()
      .then((res) => {
        setSaveAricles(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleSaveArticles(data) {
    const saved = saveAricles.find(
      (с) => с.title === data.title && с.text === data.text
    );
    if (!saved) {
      MainApi.saveArticle({
        keyword: data.keyword,
        title: data.title,
        text: data.text,
        date: data.date,
        source: data.source,
        link: data.link,
        image: data.image,
      })
        .then((Article) => {
          setSaveAricles([Article, ...saveAricles]);
          getSavedArticles();
        })
        .catch((err) => console.log(err));
    } else {
      handleDelSaveArticle(saved);
    }
  }

  function handleDelSaveArticle(data) {
    MainApi.delSaveArticle(data._id)
      .then(() => {
        const newArticles = saveAricles.filter((с) => с._id !== data._id);
        setSaveAricles(newArticles);
      })
      .catch((err) => {
        console.log(err);
      });
  }

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
    const jwt = localStorage.getItem("jwt");
    if (jwt) {
      MainApi.getContent(jwt).then((res) => {
        if (res) {
          setUserData({
            name: res.data.name,
          });
          setCurrentUser(res.data);
          getSavedArticles();
          setloggedIn(true);
        } else {
          localStorage.removeItem("jwt");
        }
      });
    }
  }

  function signOut() {
    localStorage.removeItem("jwt");
    localStorage.removeItem("articles");
    history.push("/");
  }

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        {pathname === "/" ? (
          <Header
            loggedIn={loggedIn}
            userData={userData}
            onLogin={handleLoginClick}
            onMobile={handleMoveToMobile}
            isMobile={isMobile}
            elementsRef={elementsRef}
            preloaderRef={preloaderRef}
            notFoundRef={notFoundRef}
            cardsRow={setCardsRow}
            setArticles={setArticles}
            setFailedFetch={setFailedFetch}
            onSignOut={signOut}
          />
        ) : (
          <SavedNewsHeader
            userData={userData}
            onMobile={handleMoveToMobile}
            isMobile={isMobile}
            loggedIn={loggedIn}
            onLogin={handleLoginClick}
            saveAricles={saveAricles}
            onSignOut={signOut}
          />
        )}
        <Switch>
          <Route exact path="/">
            <Main
              loggedIn={loggedIn}
              onLogin={handleLoginClick}
              showMoreCards={showMoreCards}
              cardsRow={cardsRow}
              elementsRef={elementsRef}
              preloaderRef={preloaderRef}
              notFoundRef={notFoundRef}
              articles={articles}
              saveAricles={saveAricles}
              handleSaveArticles={handleSaveArticles}
              failedFetch={failedFetch}
            />
          </Route>
          <ProtectedRoute
            loggedIn={loggedIn}
            exact
            path="/saved-news"
            component={SavedNews}
            onLogin={handleLoginClick}
            saveAricles={saveAricles}
            handleDelSaveArticle={handleDelSaveArticle}
          />
          <Route>{!loggedIn && <Redirect to="/" />}</Route>
        </Switch>
        <Footer />
        <LoginPopup
          isOpen={isLoginPopupOpen}
          onClose={closeAllPopups}
          moveRegister={handlMoveToRegister}
          handleLogin={handleLogin}
          setCurrentUser={setCurrentUser}
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
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
