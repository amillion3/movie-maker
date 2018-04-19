const xhrCalls = require('./xhr');
// loadAllMovieElements, loadMovieCategories
const data = require('./data');
// returnAllMovieElements, returnAllMovieCategories, setAllMovieElements, setAllMovieCategories
const megaSmash = require('./megaSmash');

function successLoadMovieCategories () {
  const allMovieCategories = (JSON.parse(this.responseText).categories); // XHR response
  data.setAllMovieCategories(allMovieCategories); // set movie categories data
  megaSmash(data.returnAllMovieElements(), data.returnAllMovieCategories()); // now call megaSmash...
  // here we are
}

function successLoadAllMovieElements () {
  const allMovieElements = (JSON.parse(this.responseText).elements); // XHR response
  data.setAllMovieElements(allMovieElements); // set movie elements data
  xhrCalls.loadMovieCategories(successLoadMovieCategories, failToLoad); // now get the movie... categories...
  // to do:
  // build DOM string
  // print to DOM
}
function failToLoad () {
  console.error('It broke.');
}
const initializer = () => {
  xhrCalls.loadAllMovieElements(successLoadAllMovieElements, failToLoad);
};

module.exports = {
  initializer,
  failToLoad,
};
