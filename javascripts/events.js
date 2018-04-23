const data = require('./data');
const addMovieChecks = require('./checks');
const buildBudgetDomString = require('./domBudgetBox');
const numberWithCommas = require('./currencyFormatter');

// CHECKBOX functionality
const enableAllCheckBoxes = () => {
  const checkBoxes = document.getElementsByClassName('checkbox-input');
  for (let i = 0; i < checkBoxes.length; i++) {
    checkBoxes[i].disabled = false;
  }
};
const disableAllCheckBoxes = () => {
  const checkBoxes = document.getElementsByClassName('checkbox-input');
  for (let i = 0; i < checkBoxes.length; i++) {
    checkBoxes[i].disabled = true;
  }
};
const checkboxClicked = e => {
  const boxId = e.target.id;
  const movieElement = data.returnSmashedDataSingle(boxId);
  let checked = false;
  if (document.getElementById(boxId).checked === true) {
    checked = true;
    buildBudgetDomString(movieElement);
    addMovieChecks(movieElement, checked);
  } else {  // remove movie elements...
    checked = false;
    document.getElementById(movieElement.name).remove();
    addMovieChecks(movieElement, checked);
  }
};
const createCheckboxEventListeners = () => {
  const checkBoxes = document.getElementsByClassName('checkbox-input');
  for (let i = 0; i < checkBoxes.length; i++) {
    checkBoxes[i].addEventListener('click', checkboxClicked);
  }
};

// SUBMIT BUTTON functionality
const executeWhenSubmitted = () => {
  const cost = numberWithCommas(data.returnBudget() * 1);
  document.getElementById('btn-submit').disabled = true;
  document.getElementById('bb-budget').innerHTML = `<h3>$${cost}</h3>`;
};

const submitButtonClicked = e => {
  const inputValue = (document.getElementById('input-submit').value) * 1;
  data.setBudget(inputValue);
  if (typeof(inputValue) === 'number' && inputValue > 0) {
    executeWhenSubmitted();
    enableAllCheckBoxes();
  }
};
const createSubmitButtonListener = () => {
  const submitButtonId = document.getElementById('btn-submit');
  submitButtonId.addEventListener('click', submitButtonClicked);
};

module.exports = {
  disableAllCheckBoxes,
  createCheckboxEventListeners,
  createSubmitButtonListener,
};
