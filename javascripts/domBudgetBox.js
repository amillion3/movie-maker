// build string for budget box divs
const printToDom = require('./printToDom');

const buildBudgetDomString = (movieElement) => {
  const domString = `
    <p>${movieElement.name}: $${movieElement.cost}</p>
  `;
  printToDom(domString, 'bb-elements');
};

module.exports = buildBudgetDomString;
