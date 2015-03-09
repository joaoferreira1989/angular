'use strict';

describe('myApp.module1 module', function() {

  beforeEach(module('myApp.module1'));

  describe('module1 controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var view1Ctrl = $controller('View1Ctrl');
      expect(view1Ctrl).toBeDefined();
    }));

  });
});