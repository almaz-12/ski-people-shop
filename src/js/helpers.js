export const removeNode = (selector) => {
  const node = document.querySelector(selector);
  if(node) {
    node.textContent = '';
  }  
}

export const setTitle = (title) => {
  document.querySelector('title').textContent = title + ' | SKI People';
}

export const findSubstring = (str, substring) => {
  return str.toLowerCase().includes(substring.toLowerCase());
}