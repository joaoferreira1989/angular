'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {

  browser.get('index.html');

  it('should automatically redirect to /module1 when location hash/fragment is empty', function() {
    expect(browser.getLocationAbsUrl()).toMatch("/module1");
  });


  describe('module1', function() {

    beforeEach(function() {
      browser.get('index.html#/module1');
    });


    it('should render module1 when user navigates to /module1', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 1/);
    });

  });


  describe('module2', function() {

    beforeEach(function() {
      browser.get('index.html#/module2');
    });


    it('should render module2 when user navigates to /module2', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 2/);
    });

  });
});
