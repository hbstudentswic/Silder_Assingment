const p = document.querySelector('p');

const root = document.querySelector(':root');

const input = document.getElementById('input');

const range = document.getElementById('range-slider');

const color = document.getElementById('color-changer');

const inputmin = document.getElementById('input-min');

const inputmax = document.getElementById('input-max');

const buttonmax = document.getElementById('max-button');

const buttonmin = document.getElementById('min-button');

input.addEventListener('keyup', () => {
  const inputValue = document.getElementById('input').value;
  p.innerText = inputValue;
});

range.addEventListener('input', event => {
  root.style.setProperty('--font-size', `${event.target.value}px`);
});

color.addEventListener('input', event => {
  root.style.setProperty('--color', event.target.value);
});

buttonmax.addEventListener('click', event => {
  event.preventDefault();
  document.querySelector('#font-size').min = 5;
});

buttonmin.addEventListener('click', event => {
  event.preventDefault();
  document.querySelector('#font-size').max = 900;
});
