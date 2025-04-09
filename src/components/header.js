import  { layout } from './layout';

export const header = () => {
  if(document.querySelector('.header')) return ''; 

  const el = document.createElement('header');
  el.classList.add('header');

  const template = `
    <div class="header__wrapper">
      <a class="header__logo-link" href="/" title="Переход на главную страницу"
        aria-label="Переход на главную страницу">
        <img class="header__logo-image" src="/img/logo.svg" alt="Логотип с изображением лыжника">
      </a>

      <form class="header__search" action="#">
        <input class="header__search-input" type="search" name="search">
        <button class="header__search-button" type="submit">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M7.66634 14C11.1641 14 13.9997 11.1645 13.9997 7.66671C13.9997 4.1689 11.1641 1.33337 7.66634 1.33337C4.16854 1.33337 1.33301 4.1689 1.33301 7.66671C1.33301 11.1645 4.16854 14 7.66634 14Z"
              stroke="#1C1C1C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M14.6663 14.6667L13.333 13.3334" stroke="#1C1C1C" stroke-width="1.5" stroke-linecap="round"
              stroke-linejoin="round" />
          </svg>
        </button>
      </form>

      <div class="header__links-list">
        <a class="header__link" href="/favorite">
          <span class="header__link-text">Избранное</span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M8.41325 13.8733C8.18658 13.9533 7.81325 13.9533 7.58658 13.8733C5.65325 13.2133 1.33325 10.46 1.33325 5.79332C1.33325 3.73332 2.99325 2.06665 5.03992 2.06665C6.25325 2.06665 7.32658 2.65332 7.99992 3.55998C8.67325 2.65332 9.75325 2.06665 10.9599 2.06665C13.0066 2.06665 14.6666 3.73332 14.6666 5.79332C14.6666 10.46 10.3466 13.2133 8.41325 13.8733Z"
              stroke="#1C1C1C" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </a>

        <a class="header__link" href="/cart">
          <span class="header__link-text">Корзина</span>
          <span class="header__link-count">(5)</span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.87329 1.33337L3.45996 3.75337" stroke="#1C1C1C" stroke-miterlimit="10" stroke-linecap="round"
              stroke-linejoin="round" />
            <path d="M10.1267 1.33337L12.54 3.75337" stroke="#1C1C1C" stroke-miterlimit="10" stroke-linecap="round"
              stroke-linejoin="round" />
            <path
              d="M1.33325 5.23336C1.33325 4.00002 1.99325 3.90002 2.81325 3.90002H13.1866C14.0066 3.90002 14.6666 4.00002 14.6666 5.23336C14.6666 6.66669 14.0066 6.56669 13.1866 6.56669H2.81325C1.99325 6.56669 1.33325 6.66669 1.33325 5.23336Z"
              stroke="#1C1C1C" />
            <path d="M6.50659 9.33337V11.7" stroke="#1C1C1C" stroke-linecap="round" />
            <path d="M9.57324 9.33337V11.7" stroke="#1C1C1C" stroke-linecap="round" />
            <path
              d="M2.33325 6.66663L3.27325 12.4266C3.48659 13.72 3.99992 14.6666 5.90658 14.6666H9.92659C11.9999 14.6666 12.3066 13.76 12.5466 12.5066L13.6666 6.66663"
              stroke="#1C1C1C" stroke-linecap="round" />
          </svg>
        </a>
      </div>
    </div>
  `; 

  el.append(layout(template));
  document.body.append(el);
  return el;
} 
