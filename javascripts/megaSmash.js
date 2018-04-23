const data = require('./data');
const dom = require('./dom');

const megaSmash = (elements, categories) => {
  elements.forEach((element) => {
    categories.forEach((category) => {
      if (category.id === element.categoryId) {
        element.categoryName = category.categoryName;
      }
    });
  });
  data.setSmashedData(elements);
  dom.buildDomString(data.returnSmashedData());
};

module.exports = megaSmash;
