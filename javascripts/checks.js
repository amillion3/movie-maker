const print = require('./printToDom');
const data = require('./data');
const numberWithCommas = require('./currencyFormatter');

let movieElement = {};
const categoriesUsed = [];

// build + print various DOM strings
const buildNoMovieYetString = () => {
  if (categoriesUsed.length < 4) {
    const output =
    `<h5 class='red'>You can't make this movie yet.</h5>`;
    print.printToDomReplace(output, 'bb-status');
  }
};
const buildYesMovieString = () => {
  const output = `
  <h5 class='green'>You CAN make this movie!</h5>`;
  print.printToDomReplace(output, 'bb-status');
};
const buildOverBudgetString = () => {
  const cost = numberWithCommas(data.returnBudget() * 1);
  const output = `
  <h3 class='red'>$${cost}</h3>`;
  print.printToDomReplace(output, 'bb-budget');
};

const updateCategoriesUsed = () => {
  categoriesUsed.push(movieElement.categoryName);
  data.setProgressBar();
  if (data.returnProgressBar() === 100) {
    buildYesMovieString();
  }
};

// check which movie element categories have been used already
const checkUsedCategories = () => {
  if (categoriesUsed.indexOf(movieElement.categoryName) === -1) {
    updateCategoriesUsed();
    buildNoMovieYetString();
  } else {
    buildNoMovieYetString();
  }
};

const overBudget = () => {
  buildNoMovieYetString();
  buildOverBudgetString();
};

// is it over or under budget?
const checkBudgetNumbers = () => {
  const currentBudget = data.returnBudget();
  data.setBudget(currentBudget - movieElement.cost);
  const cost = numberWithCommas(data.returnBudget() * 1);
  print.printToDomReplace(`<h3>$${cost}</h3>`, 'bb-budget');
  if ((currentBudget - movieElement.cost) < 0) {
    overBudget();
  } else {
    checkUsedCategories();
  }
};
// begin all the checks after a budget is submitted
const addMovieChecks = (inputMovieElement) => {
  movieElement = inputMovieElement;
  checkBudgetNumbers();
};

module.exports = addMovieChecks;
