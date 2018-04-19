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

module.exports = createCheckboxEventListeners;
