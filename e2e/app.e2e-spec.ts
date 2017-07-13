import { AngularGithubSamplePage } from './app.po';

describe('angular-github-sample App', () => {
  let page: AngularGithubSamplePage;

  beforeEach(() => {
    page = new AngularGithubSamplePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
