// print to dom module
const printToDom = (domString, domId) => {
  document.getElementById(domId).innerHTML += domString;
};

module.exports = printToDom;
