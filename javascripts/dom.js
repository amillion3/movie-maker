// build DOM strings
const events = require('./events');
const print = require('./printToDom');

const buildDomString = (inputArray) => {
  // refactor this, use nested .forEach loops
  const outputHTMLStructure = `
    <div id="actors"><h2 class="text-center category-title">Actors and Actresses</h2></div>
    <div id="animals"><h2 class="text-center category-title">Animals and Trainers</h2></div>
    <div id="effects"><h2 class="text-center category-title">Special Effects</h2></div>
    <div id="locations"><h2 class="text-center category-title">Locations</h2></div>`;
  print.printToDom(outputHTMLStructure, 'checkboxes');

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
    print.printToDom(outputString, divId);
  }
  events.createCheckboxEventListeners();
  events.disableAllCheckBoxes();
};

module.exports = {
  buildDomString,
};
