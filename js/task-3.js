const form = document.querySelector('#name-input');
const span = document.querySelector('#name-output');
form.addEventListener('change', event => {
  span.textContent = event.currentTarget.value;
});
