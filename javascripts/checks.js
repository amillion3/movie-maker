const print = require('./printToDom');
const data = require('./data');

let movieElement = {};
const categoriesUsed = [];

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
  const output = `
  <h3 class='red'>${data.returnBudget()}</h3>`;
  print.printToDomReplace(output, 'bb-budget');
};
const updateCategoriesUsed = () => {
  categoriesUsed.push(movieElement.categoryName);
  data.setProgressBar();
  console.log('prog bar', data.returnProgressBar());
  if (data.returnProgressBar() === 100) {
    buildYesMovieString();
  }
};

const checkUsedCategories = () => {
  if (categoriesUsed.indexOf(movieElement.categoryName) === -1) {
    updateCategoriesUsed();
    buildNoMovieYetString();
  } else {
    buildNoMovieYetString();
  }
};

const changeBudgetWithNewMovieElement = () => {
  checkUsedCategories();
};

const overBudget = () => {
  buildNoMovieYetString();
  buildOverBudgetString();
  // change budgetRemaining color to red
};

const checkBudgetNumbers = () => {
  const currentBudget = data.returnBudget();
  data.setBudget(currentBudget - movieElement.cost);
  print.printToDomReplace(`<h3>${data.returnBudget()}</h3>`, 'bb-budget');
  if ((currentBudget - movieElement.cost) < 0) {
    overBudget();
  } else {
    changeBudgetWithNewMovieElement();
  }
};

const addMovieChecks = (inputMovieElement) => {
  movieElement = inputMovieElement;
  checkBudgetNumbers();
};

module.exports = addMovieChecks;
