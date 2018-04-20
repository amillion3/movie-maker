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

const updateProgressBar = () => {
  const progressBarElement = document.getElementById('progress-bar');
  const currentProgressBar = data.returnProgressBar();
  if (currentProgressBar === 25) {
    progressBarElement.classList.add('first');
  } else if (currentProgressBar === 50) {
    progressBarElement.classList.remove('first');
    progressBarElement.classList.add('second');
  } else if (currentProgressBar === 75) {
    progressBarElement.classList.remove('second');
    progressBarElement.classList.add('third');
  } else {
    progressBarElement.classList.remove('third');
    progressBarElement.classList.add('fourth');
  }
};
const plusProgressBar = () => {
  data.setProgressBar();
  updateProgressBar();
};

module.exports = {
  createCheckboxEventListeners,
  createSubmitButtonListener,
  plusProgressBar,
};
