import { browser, element, by } from 'protractor';

export class RouterPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('roo-root h1')).getText();
  }
}
