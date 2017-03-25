import { BlueHackPage } from './app.po';

describe('blue-hack App', function() {
  let page: BlueHackPage;

  beforeEach(() => {
    page = new BlueHackPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
