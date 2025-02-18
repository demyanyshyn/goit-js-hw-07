const body = document.querySelector(`body`);
const textSpan = document.querySelector(`span.color`);
const button = document.querySelector(`button.change-color`);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function changeColor(elem1, elem2) {
  const color = getRandomHexColor();
  elem1.style.backgroundColor = color;
  elem2.style.backgroundColor = color;
  elem2.textContent = `${color}`;
}

button.addEventListener('click', event => changeColor(body, textSpan));
console.log(color);
