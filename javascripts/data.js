let allMovieElements = [];
let allMovieCategories = [];
let smashedData = [];
let budget = 0;
let progressBar = 0;

// Movie Elements setter/getter
const setAllMovieElements = inputElements => {
  allMovieElements = inputElements;
};
const returnAllMovieElements = () => allMovieElements;
// Movie Categories setter/getter
const setAllMovieCategories = inputCategories => {
  allMovieCategories = inputCategories;
};
const returnAllMovieCategories = () => allMovieCategories;
// Smashed Movie + Categories Data
const setSmashedData = inputSmashed => {
  smashedData = inputSmashed;
};
const returnSmashedData = () => smashedData;
const returnSmashedDataSingle = boxId => {
  const itemPosition = smashedData.map(function (data) {
    return data.id; // just an array of ids
  }).indexOf(boxId); // indexOf matches the checked box's id
  const smashedDataSingle = smashedData[itemPosition]; // gets the single matching object
  return smashedDataSingle;
};
// Budget setter/getter
const setBudget = budgetFromUser => {
  budget = budgetFromUser;
};
const returnBudget = () => budget;
// Progress bar setter/getter
const setProgressBar = () => {
  progressBar += 25;
  updateProgressBar();
};
const returnProgressBar = () => progressBar;
const updateProgressBar = () => {
  const progressBarElement = document.getElementById('progress-bar');
  const currentProgressBar = returnProgressBar();
  if (currentProgressBar === 25) {
    progressBarElement.classList.add('first');
    progressBarElement.classList.add('active');
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

module.exports = {
  setAllMovieElements,
  setAllMovieCategories,
  setSmashedData,
  setBudget,
  setProgressBar,
  returnAllMovieElements,
  returnAllMovieCategories,
  returnSmashedData,
  returnSmashedDataSingle,
  returnBudget,
  returnProgressBar,
};
