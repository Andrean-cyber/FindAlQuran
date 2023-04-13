import '../component/quran-list.js';
import '../component/search-bar.js';
import DataSource from '../data/data-source.js';

const main = () => {
  const searchElement = document.querySelector('search-bar');
  const quranListElement = document.querySelector('quran-list');

  const onButtonSearchClicked = async () => {
    try {
      const result = await DataSource.searchQuran(searchElement.value);
      renderResult(result);
    } catch (message) {
      fallbackResult(message);
    }
  };

  const renderResult = (results) => {
    quranListElement.qurans = results;
  };

  const fallbackResult = (message) => {
    quranListElement.renderError(message);
  };

  searchElement.clickEvent = onButtonSearchClicked;
};

export default main;