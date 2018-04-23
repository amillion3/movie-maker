const print = require('./printToDom');
const data = require('./data');
const numberWithCommas = require('./currencyFormatter');

let movieElement = {};
const categoriesUsed = [];
let checked = false;
let testArray = [];

// build + print various DOM strings
const buildNoMovieYetString = () => {
  if (testArray < 4) {
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

const progressBarSet = () => {
  testArray = [...new Set(categoriesUsed)];
  if (testArray.length === 0) {
    data.setProgressBar(0);
  } else if (testArray.length === 1) {
    data.setProgressBar(25);
  } else if (testArray.length === 2) {
    data.setProgressBar(50);
  } else if (testArray.length === 3) {
    data.setProgressBar(75);
  } else if (testArray.length === 4) {
    data.setProgressBar(100);
  }
};

const addUsedCategories = () => {
  categoriesUsed.push(movieElement.categoryName);
  progressBarSet();
  if (data.returnProgressBar() === 100) {
    buildYesMovieString();
  }
};
const removeUsedCategories = () => {
  categoriesUsed.splice(categoriesUsed.indexOf(movieElement.categoryName), 1);
  progressBarSet();
  buildNoMovieYetString();
};

const overBudget = () => {
  buildNoMovieYetString();
  buildOverBudgetString();
};

// is it over or under budget?
const checkBudgetNumbers = () => {
  const currentBudget = data.returnBudget() * 1;
  if (checked === true) {
    data.setBudget(currentBudget - movieElement.cost * 1);
    const cost = numberWithCommas(data.returnBudget() * 1);
    print.printToDomReplace(`<h3>$${cost}</h3>`, 'bb-budget');
    if ((currentBudget - movieElement.cost * 1) < 0) {
      overBudget();
    } else {
      addUsedCategories();
    }
  } else {
    data.setBudget(currentBudget + movieElement.cost * 1);
    const cost = numberWithCommas(data.returnBudget() * 1);
    print.printToDomReplace(`<h3>$${cost}</h3>`, 'bb-budget');
    if ((currentBudget + movieElement.cost * 1) < 0) {
      overBudget();
    } else {
      removeUsedCategories();
    }
  }
};
// begin all the checks after a budget is submitted
const addMovieChecks = (inputMovieElement, inputChecked) => {
  movieElement = inputMovieElement;
  checked = inputChecked;
  checkBudgetNumbers();
};

module.exports = addMovieChecks;
