import { Ng2azurePage } from './app.po';

describe('ng2azure App', () => {
  let page: Ng2azurePage;

  beforeEach(() => {
    page = new Ng2azurePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
