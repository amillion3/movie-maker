const checkboxClicked = e => {
  console.log(e);
};

const createCheckboxEventListeners = () => {
  const checkBoxes = document.getElementsByClassName('checkbox-input');
  console.log(checkBoxes);
  for (let i = 0; i < checkBoxes.length; i++) {
    checkBoxes[i].addEventListener('click', checkboxClicked);
  }
};

module.exports = createCheckboxEventListeners;
