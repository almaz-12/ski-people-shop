import { layout } from "./layout.js";

export const breadcrumbs = (parent, data) => {  
  const el = document.createElement('div');
  el.classList.add('breadcrumb')

  const listItems = data.map((item) => 
    ` <li class="breadcrumb__item">
        <a class="breadcrumb__link" href="${item.href}">${item.text}</a>
      </li>
    `
  );
  
  const child = `
        <nav class="breadcrumb__navigation">
          <ul class="breadcrumb__list">
            ${listItems.join('')}
          </ul>
        </nav>
      </div>
  `;

  el.append(layout(child, "breadcrumb__container"));
  parent.append(el);
  
  return el;
  
}