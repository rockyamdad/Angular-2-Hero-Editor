import { HeroCrudPage } from './app.po';

describe('hero-crud App', function() {
  let page: HeroCrudPage;

  beforeEach(() => {
    page = new HeroCrudPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
