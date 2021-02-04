import React from "react";
import PopupWithForm from "./PopupWithForm";

function InfoTooltip({ isOpen, onClose, moveLogin }) {
  return (
    <PopupWithForm name="tool-tip" title="Пользователь успешно зарегистрирован!" isOpen={isOpen} onClose={onClose}>
        <span className="popup__registration-button popup__registration-button_type_toolTip" onClick={moveLogin}>
          Войти
        </span>
    </PopupWithForm>
  );
}

export default InfoTooltip;
