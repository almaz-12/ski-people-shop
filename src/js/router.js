import Navigo from 'navigo';
import { header } from '../components/header';
import { main } from '../components/main';
import { catalog } from '../components/catalog';
import { productList } from '../components/productList';
import { product } from '../components/product';
import { getData } from './api';
import { footer } from '../components/footer';

const router = new Navigo('/', {linksSelector: 'a[href^="/"]'});

export const initRouter = () => {
  router.on({
    '/': async () => { 
      const data = await getData();
      header();
      productList('Список товаров', data, main());
      footer();
    },
    '/product': () => { 
      document.body.append(
        header(),
        main(product('Горные лыжи')),
        footer(),
      )
    },    
  }).notFound(function () {
    console.log('Not found');
  }).resolve();

}