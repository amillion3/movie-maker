// build string for budget box divs
const print = require('./printToDom');
const numberWithCommas = require('./currencyFormatter');

const buildBudgetDomString = (movieElement) => {
  const cost = numberWithCommas(movieElement.cost * 1);
  const domString = `
    <p id="${movieElement.name}">${movieElement.name}: $${cost}</p>
  `;
  print.printToDom(domString, 'bb-elements');
};

module.exports = buildBudgetDomString;
