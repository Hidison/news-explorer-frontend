import React from "react";
import { useLocation } from "react-router-dom";
import logoutIcon from "../images/logout-icon.svg";
import logoutIconDark from "../images/logout-icon-dark.svg";

function Navigation(props) {
  const { pathname } = useLocation();

  return (
    <nav
      className={
        !props.isMobile ? `navigation` : `navigation navigation_type_mobile`
      }
    >
      <span
        className={
          !props.isMobile
            ? `navigation__logo`
            : `navigation__logo navigation__logo_type_mobile`
        }
      >
        <a
          className={
            pathname === "/"
              ? `navigation__logo-text`
              : !props.isMobile
              ? `navigation__logo-text navigation__logo-text_type_dark`
              : `navigation__logo-text`
          }
          href="/"
        >
          NewsExplorer
        </a>
      </span>
      <ul
        className={
          !props.isMobile
            ? `navigation__links`
            : `navigation__links navigation__links_type_mobile`
        }
      >
        <li
          className={
            !props.isMobile
              ? `navigation__list`
              : `navigation__list navigation__list_type_mobile`
          }
        >
          <a
            className={
              pathname === "/"
                ? !props.isMobile
                  ? `navigation__main-link`
                  : `navigation__main-link navigation__main-link_type_mobile`
                : !props.isMobile
                ? `navigation__main-link navigation__main-link_type_dark`
                : `navigation__main-link navigation__main-link_type_mobile`
            }
            href="/"
          >
            Главная
          </a>
        </li>
        {props.loggedIn ? (
          <>
            <li
              className={
                !props.isMobile
                  ? `navigation__list`
                  : `navigation__list navigation__list_type_mobile`
              }
            >
              <a
                className={
                  pathname === "/"
                    ? `navigation__saved-news-link`
                    : !props.isMobile
                    ? `navigation__saved-news-link navigation__saved-news-link_type_dark`
                    : `navigation__saved-news-link`
                }
                href="/saved-news"
              >
                Сохранённые статьи
              </a>
            </li>
          </>
        ) : pathname === "/saved-news" ? (
          <>
            <li
              className={
                !props.isMobile
                  ? `navigation__list`
                  : `navigation__list navigation__list_type_mobile`
              }
            >
              <a
                className={
                  pathname === "/"
                    ? `navigation__saved-news-link`
                    : !props.isMobile
                    ? `navigation__saved-news-link navigation__saved-news-link_type_dark`
                    : `navigation__saved-news-link`
                }
                href="/saved-news"
              >
                Сохранённые статьи
              </a>
            </li>
          </>
        ) : (
          <></>
        )}
        <li
          className={
            !props.isMobile
              ? `navigation__list`
              : `navigation__list navigation__list_type_mobile`
          }
        >
          {!props.loggedIn && pathname === "/" ? (
            <>
              <button
                className={
                  pathname === "/"
                    ? !props.isMobile
                      ? `navigation__auth-button`
                      : `navigation__auth-button navigation__auth-button_type_mobile`
                    : !props.isMobile
                    ? `navigation__auth-button navigation__auth-button_type_dark`
                    : `navigation__auth-button navigation__auth-button_type_mobile`
                }
                onClick={props.onLogin}
              >
                Авторизоваться
              </button>
            </>
          ) : (
            <>
              <a
                href="/"
                className={
                  pathname === "/"
                    ? !props.isMobile
                      ? `navigation__auth-button`
                      : `navigation__auth-button navigation__auth-button_type_mobile`
                    : !props.isMobile
                    ? `navigation__auth-button navigation__auth-button_type_dark`
                    : `navigation__auth-button navigation__auth-button_type_mobile`
                }
                onClick={props.handleLogout}
              >
                Грета
                <img
                  src={
                    pathname === "/"
                      ? logoutIcon
                      : !props.isMobile
                      ? logoutIconDark
                      : logoutIcon
                  }
                  alt="иконка выхода"
                  className="navigation__logout-button"
                />
              </a>
            </>
          )}
        </li>
      </ul>
      <button
        className={
          pathname === "/"
            ? !props.isMobile
              ? `navigation__menu-icon`
              : `navigation__menu-icon navigation__menu-icon_type_close`
            : !props.isMobile
            ? `navigation__menu-icon navigation__menu-icon_type_dark`
            : `navigation__menu-icon navigation__menu-icon_type_close`
        }
        onClick={props.onMobile}
      ></button>
    </nav>
  );
}

export default Navigation;
