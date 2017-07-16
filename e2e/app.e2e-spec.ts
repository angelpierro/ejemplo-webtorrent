import { EjemploWebTorrentPage } from './app.po';

describe('ejemplo-web-torrent App', () => {
  let page: EjemploWebTorrentPage;

  beforeEach(() => {
    page = new EjemploWebTorrentPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
