import { Marvin08SpotifyPage } from './app.po';

describe('marvin08-spotify App', function() {
  let page: Marvin08SpotifyPage;

  beforeEach(() => {
    page = new Marvin08SpotifyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
