import  { layout } from './layout';
import renderProductList from '../js/renderProductList';
import { addFavorite } from '../js/addFavorite';

export const productList = (title, data, parent) => {

  if(document.querySelector('.goods')) document.querySelector('.goods').remove(); 

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
    const template = renderProductList(data);
  
    ul.append(template);
  } else {
    ul.append('Товары закончились');
  }

  const links = document.querySelectorAll('.catalog__link');
  if(links.length > 0) {
    links.forEach(link => {

      link.addEventListener('click', function(e) {
        console.log('click');
        e.preventDefault();      
        
        links.forEach(link => link.classList.remove('catalog__link--active'));
        
        this.classList.add('catalog__link--active');

        console.log(e.target.textContent);

        const filteredData = (e.target.textContent === 'Все') ? data : data.filter(item => item.type === e.target.textContent);
        const filteredTemplate = renderProductList(filteredData);
  
        ul.textContent = '';
        ul.append(filteredTemplate);
      });
    });
  }

  addFavorite(data);
  
  return el;
}