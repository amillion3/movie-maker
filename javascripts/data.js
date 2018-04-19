let allMovieElements = [];
let allMovieCategories = [];
let smashedData = [];
let budget = 0;

// Movie Elements setter/getter
const setAllMovieElements = inputElements => {
  allMovieElements = inputElements;
};
const returnAllMovieElements = () => {
  return allMovieElements;
};
// Movie Categories setter/getter
const setAllMovieCategories = inputCategories => {
  allMovieCategories = inputCategories;
};
const returnAllMovieCategories = () => {
  return allMovieCategories;
};
// Smashed Movie + Categories Data
const setSmashedData = inputSmashed => {
  smashedData = inputSmashed;
};
const returnSmashedData = () => {
  return smashedData;
};
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
const returnBudget = () => {
  return budget;
};

module.exports = {
  setAllMovieElements,
  setAllMovieCategories,
  setSmashedData,
  setBudget,
  returnAllMovieElements,
  returnAllMovieCategories,
  returnSmashedData,
  returnSmashedDataSingle,
  returnBudget,
};
