import { localStorageAdd, localStorageLoad } from "./localStorage";

export const addFavorite = async (data) => {
  let favoriteList = localStorageLoad('favorite'); 

  const btns = document.querySelectorAll('.card__like-button');

  if(btns.length > 0) {
    btns.forEach(btn => {
      btn.addEventListener('click', function() {
        const id = Number(this.dataset.id);
        const item = data.find(el => el.id === id);
        const icon = this.querySelector('svg');

        if(favoriteList.find(el => el.id === id)) {
          favoriteList = favoriteList.filter(el => el.id !== id);
        } else {
          favoriteList.push(item);
        }   
        icon.classList.toggle('active');
        localStorageAdd('favorite', favoriteList);

        const counterFavorite = document.getElementById('favorite-count');
        counterFavorite.textContent = `(${favoriteList.length})`;
      })
    });
  }
}