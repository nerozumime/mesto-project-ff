(()=>{"use strict";function e(e){e.classList.remove("popup_is-opened"),document.removeEventListener("keydown",t)}function t(t){"Escape"==t.key&&e(document.querySelector(".popup_is-opened"))}function n(e){e.classList.add("popup_is-opened"),document.addEventListener("keydown",t)}var r=document.querySelector("#card-template").content;function o(e,t,n,o){var c=r.querySelector(".card").cloneNode(!0);c.querySelector(".card__title").textContent=e.name;var p=c.querySelector(".card__image");return p.src=e.link,p.alt=e.name,c.querySelector(".card__delete-button").addEventListener("click",(function(){return t(c)})),c.querySelector(".card__like-button").addEventListener("click",(function(){return n(c)})),p.addEventListener("click",(function(){return o(e.name,e.link)})),c}function c(e){e.remove()}function p(e){e.querySelector(".card__like-button").classList.toggle("card__like-button_is-active")}var u=document.querySelector(".places__list");[{name:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{name:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}].forEach((function(e){return u.append(o(e,c,p,h))}));var i=document.querySelector(".profile__edit-button"),a=document.querySelector(".popup_type_edit"),d=document.querySelector(".popup__content"),l=document.forms["edit-profile"];i.addEventListener("click",(function(){y.value=_.textContent,v.value=m.textContent,n(a)}));var s=document.querySelector(".profile__info"),_=s.querySelector(".profile__title"),m=s.querySelector(".profile__description"),y=d.querySelector(".popup__input_type_name"),v=d.querySelector(".popup__input_type_description");l.addEventListener("submit",(function(t){t.preventDefault(),m.textContent=v.value,_.textContent=y.value,e(a)}));var f=document.querySelector(".profile__add-button"),k=document.forms["new-place"],q=document.querySelector(".popup_type_new-card"),S=q.querySelector(".popup__input_type_card-name"),L=q.querySelector(".popup__input_type_url");f.addEventListener("click",(function(){return n(q)})),k.addEventListener("submit",(function(t){t.preventDefault();var n={name:S.value,link:L.value};u.prepend(o(n,c,p,h)),k.reset(),e(q)}));var g=document.querySelector(".popup_type_image"),E=g.querySelector(".popup__caption"),b=g.querySelector(".popup__image");function h(e,t){E.textContent=e,b.setAttribute("src",t),b.setAttribute("alt",e),n(g)}document.querySelectorAll(".popup").forEach((function(t){t.classList.add("popup_is-animated"),t.addEventListener("mousedown",(function(n){n.target.classList.contains("popup")&&(console.log(n.target),e(t))})),t.querySelector(".popup__close").addEventListener("click",(function(){return e(t)}))}))})();
//# sourceMappingURL=main.js.map