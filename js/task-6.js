const form = document.querySelector(`#controls`);
const boxOfBoxes = document.querySelector(`#boxes`);
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const numInput = document.querySelector('#controls input');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function getSize(number) {
  return 20 + number * 10;
}

function createNewItems(quantity, target) {
  let htmlBox = ``;
  let size = 0;

  for (let i = 1; i <= quantity; i++) {
    htmlBox += `<div style = "width: ${getSize(i)}px; height: ${getSize(
      i
    )}px; background-color:${getRandomHexColor()}"></div>`;
  }
  target.innerHTML = htmlBox;
}

function deleteItems(target) {
  target.innerHTML = ``;
}

createBtn.addEventListener(`click`, event =>
  createNewItems(numInput.value, boxOfBoxes)
);
destroyBtn.addEventListener(`click`, event => deleteItems(boxOfBoxes));
