import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  inputEmail: document.querySelector('.feedback-form input'),
  textareaInput: document.querySelector('.feedback-form textarea'),
};

const STORAGE_KEY = 'feedback-form-state';

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onFormInput, 500));

populateInputData();

const dataObj = {};

function onFormInput() {
  dataObj.email = refs.inputEmail.value;
  dataObj.message = refs.textareaInput.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(dataObj));
}

function onFormSubmit(event) {
  event.preventDefault();

  console.log(populateInputData());

  localStorage.removeItem(STORAGE_KEY);
  event.target.reset();
}

function populateInputData() {
  const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (savedData) {
    refs.inputEmail.value = savedData.email;
    refs.textareaInput.value = savedData.message;
    return savedData;
  }
}
