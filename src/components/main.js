export const main = () => {
  const main = document.querySelector('main');
  if(main) return main;

  const el = document.createElement('main');

  document.body.append(el);

  return el;
}