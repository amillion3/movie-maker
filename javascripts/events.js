const data = require('./data');
const addMovieChecks = require('./checks');
const dom = require('./dom');

const checkboxClicked = e => {
  const boxId = e.target.id;
  const movieElement = data.returnSmashedDataSingle(boxId);
  dom.buildDomStringBudgetBox(movieElement);
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
