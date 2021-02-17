import React from "react";
import PopupWithForm from "./PopupWithForm";
import * as MainApi from "../utils/MainApi.js";

function LoginPopup({ isOpen, onClose, moveRegister, handleLogin }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [emailError, setEmailError] = React.useState("");
  const [passwordError, setPasswordError] = React.useState("");
  const [isEmailValid, setEmailValid] = React.useState(false);
  const [isPasswordValid, setPasswordValid] = React.useState(false);
  const emailRef = React.useRef();
  const passwordRef = React.useRef();
  const submitRef = React.useRef();

  function handleChangeEmail(e) {
    setEmail(e.target.value);
    if (!emailRef.current.validity.valid) {
      setEmailValid(false);
      setEmailError(emailRef.current.validationMessage);
    } else {
      setEmailValid(true);
      setEmailError("");
    }
  }

  function handleChangePassword(e) {
    setPassword(e.target.value);
    if (!passwordRef.current.validity.valid) {
      setPasswordValid(false);
      setPasswordError(passwordRef.current.validationMessage);
    } else {
      setPasswordValid(true);
      setPasswordError("");
    }
  }

  React.useEffect(() => {
    setEmailValid(false);
    setPasswordValid(false);
    setEmailError("");
    setPasswordError("");
    setEmail("");
    setPassword("");
  }, [isOpen]);

  React.useEffect(() => {
    isEmailValid && isPasswordValid
      ? (submitRef.current.disabled = false)
      : (submitRef.current.disabled = true);
  }, [isEmailValid, isPasswordValid]);

  function handleSubmit(e) {
    e.preventDefault();
    MainApi.authorize(escape(email), escape(password))
      .then((data) => {
        if (data.token) {
          handleLogin();
        }
      })
      .catch((err) => console.log(err));
  }

  return (
    <PopupWithForm
      title="Вход"
      name="login"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <span className="popup__input-title">Email</span>
      <input
        type="email"
        name="email"
        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
        value={email || ""}
        placeholder="Введите почту"
        onChange={handleChangeEmail}
        className="popup__form-text"
        id="email-input"
        ref={emailRef}
        minLength="2"
        maxLength="40"
        autoComplete="off"
        required
      />
      {!isEmailValid && (
        <span className="popup__form-text-error" id="email-input-error">
          {emailError}
        </span>
      )}
      <span className="popup__input-title popup__input-title_type_password">
        Пароль
      </span>
      <input
        type="text"
        name="password"
        value={password || ""}
        placeholder="Введите пароль"
        onChange={handleChangePassword}
        className="popup__form-text"
        id="password-input"
        ref={passwordRef}
        minLength="6"
        maxLength="30"
        autoComplete="off"
        required
      />
      {!isPasswordValid && (
        <span className="popup__form-text-error" id="password-input-error">
          {passwordError}
        </span>
      )}
      <input
        type="submit"
        value="Войти"
        ref={submitRef}
        className={
          isEmailValid && isPasswordValid
            ? `popup__form-submit`
            : `popup__form-submit button_inactive`
        }
        disabled
      />
      <p className="popup__switch-auth">
        или
        <span className="popup__registration-button" onClick={moveRegister}>
          Зарегистрироваться
        </span>
      </p>
    </PopupWithForm>
  );
}

export default LoginPopup;
