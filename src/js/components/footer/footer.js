
import footerTemplate from '../../templates/footer.hbs';
import footer from './footerData';
import prepareFooter from './footerHelpers';

var footerElement = document.getElementById('footer');

if (footerElement) {
  footerElement.innerHTML = footerTemplate({ footer: prepareFooter(footer) });
}
