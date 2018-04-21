// build string for budget box divs
const print = require('./printToDom');

const buildBudgetDomString = (movieElement) => {
  const domString = `
    <p>${movieElement.name}: $${movieElement.cost}</p>
  `;
  print.printToDom(domString, 'bb-elements');
};

module.exports = buildBudgetDomString;
