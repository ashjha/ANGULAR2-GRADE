import { browser, element, by } from 'protractor';

export class KRAAngular2Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('kra-root h1')).getText();
  }
}
