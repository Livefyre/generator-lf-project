/*global require, sinon, describe, should, it, before, after, beforeEach, afterEach */

var MainView = require('src/js/main-view');

describe('MainView', function() {
  it ('should exist', function() {
    should.exist(MainView);
  });

  it ('should be a constructor function', function() {
    MainView.should.be.a('Function');
  });
});