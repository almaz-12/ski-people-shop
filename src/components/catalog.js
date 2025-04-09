import  { layout } from './layout';

export const catalog = () => {
  if(document.querySelector('.catalog')) return ''; 

  const el = document.createElement('div');
  el.classList.add('catalog');

  const template = `
    <ul class="catalog__list">
      <li class="catalog__item">
        <a class="catalog__link catalog__link--active" href="">Все</a>
      </li>
      <li class="catalog__item">
        <a class="catalog__link" href="">Лыжи</a>
      </li>
      <li class="catalog__item">
        <a class="catalog__link" href="">Сноуборды</a>
      </li>
      <li class="catalog__item">
        <a class="catalog__link" href="">Экипировка</a>
      </li>
      <li class="catalog__item">
        <a class="catalog__link" href="">Ботинки</a>
      </li>
    </ul>`;

  el.append(layout(template));
  return el;
}