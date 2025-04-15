import  { layout } from './layout';

export const catalog = (parent, data = []) => {
  if(document.querySelector('.catalog')) return ''; 

  const el = document.createElement('div');
  el.classList.add('catalog');

  const allTypes = data.map(item => item.type);

  const uniqueTypes = [...new Set(allTypes)];

  let catalogHTML = `
    <ul class="catalog__list">
      <li class="catalog__item">
        <a class="catalog__link catalog__link--active" href="#">Все</a>
      </li>
  `;

  uniqueTypes.forEach(type => {
    catalogHTML += `
      <li class="catalog__item">
        <a class="catalog__link" href="#">${type}</a>
      </li>
    `;
  });

  catalogHTML += `</ul>`;

  el.append(layout(catalogHTML));
  parent.append(el);

  
  return el;
}