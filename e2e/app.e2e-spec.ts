import { KRAAngular2Page } from './app.po';

describe('kra-angular2 App', function() {
  let page: KRAAngular2Page;

  beforeEach(() => {
    page = new KRAAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('kra works!');
  });
});
