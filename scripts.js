const p = document.querySelector('p');

const root = document.querySelector(':root');

const input = document.getElementById('input');

const range = document.getElementById('range-slider');

const color = document.getElementById('color-changer');

input.addEventListener('keyup', () => {
  const inputValue = document.getElementById('input').value;

  /* console.log(inputValue); JUST FOR TESTING */

  p.innerText = inputValue;
});

range.addEventListener('input', event => {
  root.style.setProperty('--font-size', `${event.target.value}px`);
});

color.addEventListener('input', event => {
  root.style.setProperty('--color', event.target.value);
});
