const dateFormat = require("dateformat");

export const NEWS_URL = "https://nomoreparties.co/news/v2/everything";

const toDate = new Date();
const fromDate = new Date().setDate(toDate.getDate()-7);

const to = dateFormat(toDate, 'yyyy-mm-dd')
const from = dateFormat(fromDate, 'yyyy-mm-dd')

export const getNewsArticles = (keyword) => {
  return fetch(`${NEWS_URL}?q=${keyword}&from=${from}&to=${to}&pageSize=100&apiKey=f775eeb9ce1d4160a19095426f61706d`, {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
    },
  })
  .then(res => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  });
};
