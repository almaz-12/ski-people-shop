export const removeNode = (selectors) => {
  if(!selectors) return;

  selectors.forEach(selector => {
    const node = document.querySelector(selector);
    console.log('node ',node);
    if(node) {
      node.textContent = '';
    } 
  });   
}

export const setTitle = (title) => {
  document.querySelector('title').textContent = title + ' | SKI People';
}

export const findSubstring = (str, substring) => {
  return str.toLowerCase().includes(substring.toLowerCase());
}