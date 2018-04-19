const data = require('./data');
const buildDomString = require('./dom');

const megaSmash = (elements, categories) => {
  elements.forEach((element) => {
    categories.forEach((category) => {
      if (category.id === element.categoryId) {
        element.categoryName = category.categoryName;
      }
    });
  });
  data.setSmashedData(elements);
  console.log(data.returnSmashedData());
  buildDomString(data.returnSmashedData());
};

module.exports = megaSmash;
