const loadAllMovieElements = (loadFunction, errorFunction) => {
  const request = new XMLHttpRequest();
  request.addEventListener('load', loadFunction);
  request.addEventListener('error', errorFunction);
  request.open('GET', '../db/movie-elements.json');
  request.send();
};

const loadMovieCategories = (loadFunction, errorFunction) => {
  const myRequest = new XMLHttpRequest();
  myRequest.addEventListener('load', loadFunction);
  myRequest.addEventListener('error', errorFunction);
  myRequest.open('GET', '/db/categories.json');
  myRequest.send();
};

module.exports = {
  loadAllMovieElements,
  loadMovieCategories,
};
