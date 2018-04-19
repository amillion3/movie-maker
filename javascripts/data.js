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
const returnSmashedDataSingle = boxId => {
  const itemPosition = smashedData.map(function (data) {
    return data.id; // just an array of ids
  }).indexOf(boxId); // indexOf matches the checked box's id
  const smashedDataSingle = smashedData[itemPosition]; // gets the single matching object
  return smashedDataSingle;
};

module.exports = {
  setAllMovieElements,
  setAllMovieCategories,
  setSmashedData,
  returnAllMovieElements,
  returnAllMovieCategories,
  returnSmashedData,
  returnSmashedDataSingle,
};
