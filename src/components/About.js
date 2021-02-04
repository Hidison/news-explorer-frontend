import React from "react";
import aboutAvatar from "../images/avatar.jpg";

function About() {
  return (
    <>
      <div className="about__avatar">
        <img
          src={aboutAvatar}
          alt="аватар автора"
          className="about__avatar-icon"
        />
      </div>
      <div className="about__text">
        <h1 className="about__title">Об авторе</h1>
        <p className="about__subtitle">
          Меня зовут Александр. Я из г. Чебоксары. Я обучаюсь в университете ЧГУ
          им. И. Н. Ульянова по специальности «Экономическая безопасность». Ещё
          на первом курсе я начал увлекаться веб-разработкой. И вот, спустя
          некоторое время, я решил пойти учиться веб-разработке в
          Яндекс.Практикум.
        </p>
        <p className="about__subtitle">
          В процессе обучения в Яндекс.Практикуме я овладел следующими навыками:
        </p>
        <ul className="about__subtitle">
            <li>Кроссбраузерная и адаптивная верстка сайтов(HTML, CSS).</li>
            <li>Организации файлов и кода по Методологии БЭМ.</li>
            <li>Git.</li>
            <li>Базовый и Продвинутый JavaScript.</li>
            <li>Объектно-ориентированное программирование (ООП).</li>
            <li>Сборка проекта с помощью Webpack.</li>
            <li>Интерфейсы с использованием React.</li>
            <li>Основы бэкенда для фронтенд-разработчиков(Node.js, Express.js, MongoDB).</li>
          </ul>
      </div>
    </>
  );
}

export default About;
