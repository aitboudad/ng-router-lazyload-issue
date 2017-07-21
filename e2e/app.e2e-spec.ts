import { RouterLazyloadIssuePage } from './app.po';

describe('router-lazyload-issue App', () => {
  let page: RouterLazyloadIssuePage;

  beforeEach(() => {
    page = new RouterLazyloadIssuePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
