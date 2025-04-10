import  { layout } from './layout';

export const productList = (title, data, parent) => {
  if(document.querySelector('.goods')) return ''; 

  const el = document.createElement('section');
  el.classList.add('goods');

  const template = `
      <h2 class="goods__title">${title}</h2>
      <ul class="goods__list"></ul>
    `;

  el.append(layout(template));
  parent.append(el);

  const ul = document.querySelector(".goods__list");

  if(data && data.length) {    
    const fragment = document.createDocumentFragment();
  
    data.forEach(({ id, manufacturer, price }) => {
      const li = document.createElement("li");
      li.classList = 'goods__item';
      li.innerHTML = `<article class="goods__card card">
          <a class="card__link" href="/product/${id}">
            <img class="card__img" src="/img/photo.png" alt="${manufacturer}">
          </a>
          <button class="card__like-button" type="button">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M8.41301 13.8733C8.18634 13.9533 7.81301 13.9533 7.58634 13.8733C5.65301 13.2133 1.33301 10.46 1.33301 5.79332C1.33301 3.73332 2.99301 2.06665 5.03967 2.06665C6.25301 2.06665 7.32634 2.65332 7.99967 3.55998C8.67301 2.65332 9.75301 2.06665 10.9597 2.06665C13.0063 2.06665 14.6663 3.73332 14.6663 5.79332C14.6663 10.46 10.3463 13.2133 8.41301 13.8733Z"
                fill="white" stroke="#1C1C1C" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>

          <div class="card__info">
            <h3 class="card__info-title">${manufacturer}</h3>
            <p class="card__info-price">${price}</p>
          </div>

          <button class="card__button"> В корзину </button>
        </article>`;
      fragment.appendChild(li);
    });
  
    ul.append(fragment);
  } else {
    ul.append('Товары закончились');
  }
  
  return el;
}