const config = {
  baseUrl: 'https://nomoreparties.co/v1/wff-cohort-32',
  headers: {
    authorization: '02b9c19d-79dc-493d-abd5-a076a605d6c6',
    'Content-Type': 'application/json'
  }
}

export function serverRequest(){
  return fetch(`${config.baseUrl}/cards`, {
    headers: config.headers
  })
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(res => console.log('Не вышло'));
}

export function serverRequestProfileData(){
  return fetch(`${config.baseUrl}/users/me`, {
    method: 'GET',
    headers: config.headers
  })
    .then(res => res.json())
    .then(data => console.log(data));
}

export function serverRequestInitialCardsData(){
  return fetch(`${config.baseUrl}/cards`, {
    method: 'GET',
    headers: config.headers
  })
    .then(res => res.json())
    .then(data => console.log(data));
}

export function serverRequestProfileEdit(){
  fetch(`${config.baseUrl}/users/me`, {
    method: 'PATCH',
    headers: config.headers,
    body: JSON.stringify({
      name: 'Daniel Lunev',
      about: 'Frontend developer'
    })
  });
}

export function serverRequestAddNewCard(){
  fetch(`${config.baseUrl}/cards`,{
    method: 'POST',
    headers: config.headers
  })
}