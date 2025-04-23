import Navigo from 'navigo';
import { getData, getDataByQuery } from './api';
import { localStorageLoad } from './localStorage';
import { removeNode, setTitle } from './helpers' 
import { BC_FAVORITE } from './const';

import { header } from '../components/header';
import { breadcrumbs } from '../components/breadcrumbs';
import { main } from '../components/main';
import { filter } from '../components/filter';
import { productList } from '../components/productList';
import { product } from '../components/product';
import { pagination } from "../components/pagination";
import { footer } from '../components/footer';

const router = new Navigo('/', { linksSelector: 'a[href^="/"]' });

export const initRouter = () => {
  
  router.hooks({
    leave(done, match) {
      removeNode(['main','pagination']);
      done();
    }
  });
  
  router.on('/', async () => { 
      setTitle('Главная');
      const data = await getData();
      header();
      filter(main(), data);
      productList('Список товаров', data.slice(0, 12), main());
      pagination(data, main());
      footer();
      router.updatePageLinks();
    }   
  );

  router.on('/product/:id', async ({data1}) => {
      setTitle('Товар'); 
      const data = await getData();
      header();
      breadcrumbs(main(),BC_FAVORITE);
      product(main(), data);
      footer();
      router.updatePageLinks();
    }   
  );

  router.on('/favorite', async () => { 
      setTitle('Избранное');
      header();      
      breadcrumbs(main(),BC_FAVORITE);
      productList('Избранное', localStorageLoad('favorite'), main());
      footer();
      router.updatePageLinks();
    }   
  );

  router.on('/search', async (query) => {  
      console.log('query', query);
      console.log('query in router ', query.params.search);
      setTitle('Список товаров по запросу: '+ query.params.search);

      const data = await getDataByQuery(query.params.search);
      header(); 
      filter(main(), data);
      productList('Список товаров по запросу: '+ query.params.search, data, main());
      footer();
      router.updatePageLinks(); 
    }
  );
  
  router.notFound(function () {
    header();
    document.body.innerHTML = `<h2>Такой страницы не существует</h2>`;
    footer();
  }).resolve();

}