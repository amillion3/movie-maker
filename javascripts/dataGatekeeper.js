const xhrCalls = require('./xhr');
const data = require('./data');
const megaSmash = require('./megaSmash');
const events = require('./events');

function successLoadMovieCategories () {
  const allMovieCategories = (JSON.parse(this.responseText).categories); // XHR response
  data.setAllMovieCategories(allMovieCategories); // set movie categories data
  megaSmash(data.returnAllMovieElements(), data.returnAllMovieCategories()); // now call megaSmash...
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
  events.createSubmitButtonListener();
};

module.exports = {
  initializer,
  failToLoad,
};
