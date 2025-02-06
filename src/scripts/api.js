const config = {
  baseUrl: 'https://nomoreparties.co/v1/wff-cohort-32',
  headers: {
    authorization: '02b9c19d-79dc-493d-abd5-a076a605d6c6',
    'Content-Type': 'application/json'
  }
}
// example request
function serverRequest(){
  return fetch(`${config.baseUrl}/cards`, {
    headers: config.headers
  })
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(() => console.log('Не удалось выполнить запрос'));
}

export function serverRequestProfileData(){
  return fetch(`${config.baseUrl}/users/me`, {
    method: 'GET',
    headers: config.headers
  })
    .then(res => {
      if(res.ok){
        return res.json();
      }
    })
    .catch(() => console.log('Не удалось получить данные профиля с сервера'));
}

export function serverRequestInitialCardsData(){
  return fetch(`${config.baseUrl}/cards`, {
        headers: config.headers
    })
    .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    })
}

export function serverRequestProfileEdit(name, about){
  return fetch(`${config.baseUrl}/users/me`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({
      name: name,
      about: about
    })
  })
  .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Ошибка: ${res.status}`);
    })
}

export function serverRequestAddNewCard(){
  return fetch(`${config.baseUrl}/cards`,{
    method: 'POST',
    headers: config.headers
  })
}