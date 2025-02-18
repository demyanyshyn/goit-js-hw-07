const form = document.querySelector('form');
let userFormInput = {};
console.log(form.email.value);
form.addEventListener('submit', event => {
  let email = form.elements.email.value.trim();
  let password = form.elements.password.value.trim();
  event.preventDefault();
  if (email === `` || password === ``) {
    alert(`All form fields must be filled in`);
  } else {
    userFormInput = {
      [form.email.name]: email,
      [form.password.name]: password,
    };
    console.log(userFormInput);
    form.reset();
  }
});
