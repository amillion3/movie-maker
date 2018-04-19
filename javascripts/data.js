let allMovieElements = [];
let allMovieCategories = [];
let smashedData = [];

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

module.exports = {
  setAllMovieElements,
  setAllMovieCategories,
  setSmashedData,
  returnAllMovieElements,
  returnAllMovieCategories,
  returnSmashedData,
};
