const config = {
  baseUrl: "https://nomoreparties.co/v1/wff-cohort-32",
  headers: {
    authorization: "02b9c19d-79dc-493d-abd5-a076a605d6c6",
    "Content-Type": "application/json",
  },
};

function checkResStatus(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
}

export function getProfileData() {
  return fetch(`${config.baseUrl}/users/me`, {
    method: "GET",
    headers: config.headers,
  }).then((res) => checkResStatus(res));
}

export function getInitialCardsData() {
  return fetch(`${config.baseUrl}/cards`, {
    headers: config.headers,
  }).then((res) => checkResStatus(res));
}

export function getProfileEdit(name, about) {
  return fetch(`${config.baseUrl}/users/me`, {
    method: "PATCH",
    headers: config.headers,
    body: JSON.stringify({
      name: name,
      about: about,
    }),
  }).then((res) => checkResStatus(res));
}

export function getAddNewCard(name, link) {
  return fetch(`${config.baseUrl}/cards`, {
    method: "POST",
    headers: config.headers,
    body: JSON.stringify({
      name: name,
      link: link,
    }),
  }).then((res) => checkResStatus(res));
}

export function deleteCardByID(cardId) {
  return fetch(`${config.baseUrl}/cards/${cardId}`, {
    method: "DELETE",
    headers: config.headers,
  }).then((res) => checkResStatus(res));
}

export function putLike(cardId) {
  return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
    method: "PUT",
    headers: config.headers,
  }).then((res) => checkResStatus(res));
}

export function deleteLike(cardId) {
  return fetch(`${config.baseUrl}/cards/likes/${cardId}`, {
    method: "DELETE",
    headers: config.headers,
  }).then((res) => checkResStatus(res));
}

export function changeAvatar(avatar) {
  return fetch(`${config.baseUrl}/users/me/avatar`, {
    method: "PATCH",
    headers: config.headers,
    body: JSON.stringify({
      avatar: avatar,
    }),
  }).then((res) => checkResStatus(res));
}
