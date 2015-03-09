'use strict';

describe('myApp.module2 module', function() {

  beforeEach(module('myApp.module2'));

  describe('module2 controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var view2Ctrl = $controller('View2Ctrl');
      expect(view2Ctrl).toBeDefined();
    }));

  });
});