const createCheckboxEventListeners = require('./events');
const printToDom = require('./printToDom');

// const printToDom = (domString, domId) => {
//   document.getElementById(domId).innerHTML += domString;
// };

const buildDomString = (inputArray) => {
  // refactor this, use nested .forEach loops
  const outputHTMLStructure = `
    <div id="actors"><h2 class="text-center">Actors and Actresses</h2></div>
    <div id="animals"><h2 class="text-center">Animals and Trainers</h2></div>
    <div id="effects"><h2 class="text-center">Special Effects</h2></div>
    <div id="locations"><h2 class="text-center">Locations</h2></div>`;
  printToDom(outputHTMLStructure, 'checkboxes');

  let outputString = '';
  for (let i = 0; i < inputArray.length; i++) {
    let divId = '';
    if (inputArray[i].categoryName === 'Actors and Actresses') {
      divId = 'actors';
    } else if (inputArray[i].categoryName === 'Animals and Trainers') {
      divId = 'animals';
    } else if (inputArray[i].categoryName === 'Special Effects') {
      divId = 'effects';
    } else {
      divId = 'locations';
    }
    outputString = `
      <div class="checkbox">
        <label>
          <input type="checkbox" class ="checkbox-input" value="" id="${inputArray[i].id}">
          ${inputArray[i].name};
        </label>
      </div>
    `;
    printToDom(outputString, divId);
  }
  createCheckboxEventListeners();
};

module.exports = {
  buildDomString,
};
