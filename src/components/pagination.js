import { layout } from "./layout";
import { PRODUCT_COUNT } from "../js/const";
import { paginationHandler } from "../js/paginationHandler";

export const pagination = (data, parent) => {
  const el = document.createElement('div');
  el.classList.add('pagination');

  const progress =  PRODUCT_COUNT * 100 / data.length;

  const child = `
      <div class="pagination__list" >
        <div class="pagination__list-progress" style="width: ${progress}%;"></div>
      </div>
      <div class="pagination__count count-text">
        <button class="count-text__button count-text__button--prev" type="button" disabled>&lt;</button>
        <p class="count-text__text"><span class="pagination__count-start">${PRODUCT_COUNT}</span> из ${data.length}</p>
        <button class="count-text__button count-text__button--next" type="button">&gt;</button>
      </div> 
  `;  

  el.append(layout(child, "pagination__container"));     
  parent.append(el); 
  paginationHandler(data);    
  return el;    
}
  