const print = require('./printToDom');
const data = require('./data');

let movieElement = {};
const categoriesUsed = [];

const buildYesMovieString = () => {
  const output = `You CAN make this movie!`;
  print.printToDomReplace(output, 'bb-status');
};
const buildNoMovieYetString = () => {
  const output = `You can't make this movie yet.`;
  print.printToDomReplace(output, 'bb-status');
};

const updateCategoriesUsed = () => {
  console.log('YESSSupdate cat function ', movieElement.categoryName);
  categoriesUsed.push(movieElement.categoryName);
  data.setProgressBar();
  if (categoriesUsed.length > 3) {
    console.log(categoriesUsed);
    console.log(categoriesUsed.length);

    buildYesMovieString();
    // TO DO: change text to green

  }
  // push to categoriesUsed []
  // update progress bar
  // is categoriesUsed.length = 4?
  // yes, call buildYesMovieString()
  // no...
  // FOR BOTH, update budget box number (green)
};

const checkUsedCategories = () => {
  if (categoriesUsed.indexOf(movieElement.categoryName) === -1) {
    updateCategoriesUsed();
    buildNoMovieYetString();
  // }
  } else {
    // array contains category already
    buildNoMovieYetString();
  }
  //  if...  .indexOf(category)
  // if already used update budget-box with...
  // 'You can't make this movie yet'
  //
  // if NOT used...
  // push to categoriesUsed []
  // update progress bar
  //    is categoriesUsed.length = 4?
  //      if true, print 'You can make this movie!'
  // FOR BOTH, update budget box number (green)
};

const changeBudgetWithNewMovieElement = () => {
  data.updateBudget(movieElement.cost);
  console.log('category ', movieElement.categoryName);
  console.log('cost', movieElement.cost);
  checkUsedCategories();
  // check movie categories
};

const overBudget = () => {
  buildNoMovieYetString();
  // change budgetRemaining color to red
};

const checkBudgetNumbers = () => {
  // accept movie element object
  // get budget + compare
  // if over, call overBudget
  // if not, subtract the new element (don't touch colors yet)
  const currentBudget = data.returnBudget();
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
