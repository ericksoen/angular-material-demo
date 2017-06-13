import { TestFormsNg4Page } from './app.po';

describe('test-forms-ng4 App', () => {
  let page: TestFormsNg4Page;

  beforeEach(() => {
    page = new TestFormsNg4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
