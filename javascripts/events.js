const data = require('./data');
const addMovieChecks = require('./checks');
const buildBudgetDomString = require('./domBudgetBox');

const checkboxClicked = e => {
  const boxId = e.target.id;
  const movieElement = data.returnSmashedDataSingle(boxId);
  buildBudgetDomString(movieElement);
  addMovieChecks(boxId);
};
const createCheckboxEventListeners = () => {
  const checkBoxes = document.getElementsByClassName('checkbox-input');
  console.log(checkBoxes);
  for (let i = 0; i < checkBoxes.length; i++) {
    checkBoxes[i].addEventListener('click', checkboxClicked);
  }
};

const submitButtonClicked = e => {
  const inputValue = (document.getElementById('input-submit').value) * 1;
  data.setBudget(inputValue);
  if (typeof(inputValue) === 'number' && inputValue > 0) {
    console.log(data.returnBudget());
  }
};
const createSubmitButtonListener = () => {
  const submitButtonId = document.getElementById('btn-submit');
  submitButtonId.addEventListener('click', submitButtonClicked);
};

module.exports = {
  createCheckboxEventListeners,
  createSubmitButtonListener,
};
