export const BASE_URL = "https://api.sash-diplom.students.nomoreparties.space";

const handleOriginalResponse = (res) => {
  if (res.ok) {
    return res.json();
  }

  return Promise.reject(`Ошибка: ${res.status}`);
};

export const register = (name, email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, password }),
  })
    .then((res) => {
      if (res.status === 400) {
        throw new Error("Некорректно заполнено одно из полей");
      } else {
        return res.json();
      }
    })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log(err);
      return Promise.reject(err);
    });
};

export const authorize = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      }
      if (response.status === 400) {
        throw new Error("Не передано одно из полей");
      }
      if (response.status === 401) {
        throw new Error("Пользователь с email не найден");
      }
    })
    .then((data) => {
      if (data.token) {
        localStorage.setItem("jwt", data.token);
        return data;
      }
    })
    .catch((err) => console.log(err));
};

export const getContent = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => {
      if (res.status === 200) {
        return res.json();
      }
      if (res.status === 400) {
        throw new Error("Токен не передан или передан не в том формате");
      }
      if (res.status === 401) {
        throw new Error("Переданный токен некорректен");
      }
    })
    .then((data) => data);
};

export const getPersonInfo = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then(handleOriginalResponse);
};

export const saveArticle = (data) => {
  return fetch(`${BASE_URL}/articles`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      keyword: data.keyword,
      title: data.title,
      text: data.text,
      date: data.date,
      source: data.source,
      link: data.link,
      image: data.image,
    }),
  }).then(handleOriginalResponse);
};

export const delSaveArticle = (articleId) => {
  return fetch(`${BASE_URL}/articles/${articleId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      "Content-Type": "application/json",
    },
  }).then(handleOriginalResponse);
}

export const getSavedArticles = () => {
  return fetch(`${BASE_URL}/articles`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      "Content-Type": "application/json",
  },
  }).then(handleOriginalResponse);
}
