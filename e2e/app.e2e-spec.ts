import { ReactionlessPage } from './app.po';

describe('reactionless App', function() {
  let page: ReactionlessPage;

  beforeEach(() => {
    page = new ReactionlessPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
