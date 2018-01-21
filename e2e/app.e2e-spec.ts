import { BeerhousePage } from './app.po';

describe('beerhouse App', function() {
  let page: BeerhousePage;

  beforeEach(() => {
    page = new BeerhousePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
