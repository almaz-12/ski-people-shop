import Navigo from 'navigo';
import { header } from '../components/header';
import { main } from '../components/main';
import { catalog } from '../components/catalog';
import { productList } from '../components/productList';
import { product } from '../components/product';
import { getData } from './api';
import { localStorageLoad } from './localStorage';
import { addFavorite } from './addFavorite';
import { footer } from '../components/footer';

const router = new Navigo('/', { linksSelector: 'a[href^="/"]' });

export const initRouter = () => {
  router.on({
    '/': async () => { 
      const data = await getData();
      header();
      catalog(main(), data);
      productList('Список товаров', data, main());
      footer();
      router.updatePageLinks();
    },  
    '/favorite': async () => { 
      header();
      productList('Избранное', localStorageLoad('favorite'), main());
      footer();
      router.updatePageLinks();
    },    
  }).notFound(function () {
    document.body.innerHTML = `<h2>Такой страницы не существует</h2>`;
    console.log('404');
  }).resolve();

}