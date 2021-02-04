import React from "react";
import PopupWithForm from "./PopupWithForm";

function RegisterPopup({ isOpen, onClose, moveLogin, onSubmitClick }) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [name, setName] = React.useState("");
  const [emailError, setEmailError] = React.useState("");
  const [passwordError, setPasswordError] = React.useState("");
  const [nameError, setNameError] = React.useState("");
  const [isEmailValid, setEmailValid] = React.useState(false);
  const [isPasswordValid, setPasswordValid] = React.useState(false);
  const [isNameValid, setNameValid] = React.useState(false);
  const emailRef = React.useRef();
  const passwordRef = React.useRef();
  const nameRef = React.useRef();
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

  function handleChangeName(e) {
    setName(e.target.value);
    if (!nameRef.current.validity.valid) {
      setNameValid(false);
      setNameError(nameRef.current.validationMessage);
    } else {
      setNameValid(true);
      setNameError("");
    }
  }

  React.useEffect(() => {
    setEmailValid(false);
    setPasswordValid(false);
    setNameValid(false);
    setEmailError("");
    setPasswordError("");
    setNameError("");
    setEmail("");
    setPassword("");
    setName("");
  }, [isOpen]);

  React.useEffect(() => {
    isEmailValid && isPasswordValid && isNameValid ? submitRef.current.disabled = false : submitRef.current.disabled = true;
  }, [isEmailValid, isPasswordValid, isNameValid]);

  function handleSubmit(e) {
    e.preventDefault();
    onSubmitClick();
  }

  return (
    <PopupWithForm
      title="Регистрация"
      name="register"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <span className="popup__input-title">Email</span>
      <input
        type="email"
        name="email"
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
      <span className="popup__input-title popup__input-title_type_password">
        Имя
      </span>
      <input
        type="text"
        name="name"
        value={name || ""}
        placeholder="Введите своё имя"
        onChange={handleChangeName}
        className="popup__form-text"
        id="name-input"
        ref={nameRef}
        minLength="2"
        maxLength="30"
        autoComplete="off"
        required
      />
      {!isNameValid && (
        <span className="popup__form-text-error" id="name-input-error">
          {nameError}
        </span>
      )}
      <input
        type="submit"
        value="Зарегистрироваться"
        ref={submitRef}
        className={
          isEmailValid && isPasswordValid && isNameValid
            ? `popup__form-submit`
            : `popup__form-submit button_inactive`
        }
        disabled
      />
      <p className="popup__switch-auth">
        или
        <span className="popup__registration-button" onClick={moveLogin}>
          Войти
        </span>
      </p>
    </PopupWithForm>
  );
}

export default RegisterPopup;
