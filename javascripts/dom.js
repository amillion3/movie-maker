const printToDom = (domString, domId) => {
  document.getElementById(domId).innerHTML += domString;
};

const buildDomString = (inputArray) => {
  let outputString = '';
  for (let i = 0; i < inputArray.length; i++) {
    console.log(inputArray[i].name);
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
      <div class="checkbox disabled">
        <label>
          <input type="checkbox" value="" disabled>
          ${inputArray[i].name};
        </label>
      </div>
    `;
    printToDom(outputString, divId); // printToDom needs to be a += setup
  }
};

module.exports = buildDomString;
