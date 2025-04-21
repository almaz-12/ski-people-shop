import { PRODUCT_COUNT } from "../js/const";
import renderProductList from '../js/renderProductList';

export const paginationHandler = (data) => {
  let currentPage = 0;
  const totalPages = Math.ceil(data.length / PRODUCT_COUNT);
  
  const prevBtn = document.querySelector('.count-text__button--prev');
  const nextBtn = document.querySelector('.count-text__button--next');
  const productsContainer = document.querySelector('.goods__list');
  const startNumBlock = document.querySelector('.pagination__count-start');
  const paginationProgress = document.querySelector('.pagination__list-progress');

  function startPagination() {
      productsContainer.innerHTML = '';
      
      const start = currentPage * PRODUCT_COUNT;
      const end = (start + PRODUCT_COUNT) > data.length ? data.length : start + PRODUCT_COUNT;
      const pageProducts = data.slice(start, end);      
      
      productsContainer.appendChild(renderProductList(pageProducts));

      const progress =  end * 100 / data.length;
      paginationProgress.style.width = progress+'%';
      startNumBlock.textContent = end;      

      prevBtn.disabled = currentPage === 0;
      nextBtn.disabled = currentPage === totalPages - 1;
  }

  prevBtn.addEventListener('click', () => {
      if (currentPage > 0) {
          currentPage--;
          startPagination();
      }
  });

  nextBtn.addEventListener('click', () => {
      if (currentPage < totalPages - 1) {
          currentPage++;
          startPagination();
      }
  });
}