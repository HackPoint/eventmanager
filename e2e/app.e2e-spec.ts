import { EventManagerPage } from './app.po';

describe('event-manager App', () => {
  let page: EventManagerPage;

  beforeEach(() => {
    page = new EventManagerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
