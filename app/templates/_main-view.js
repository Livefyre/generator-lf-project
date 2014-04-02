/*global require, module */
'use strict';

var $ = require('jquery');
var _ = require('lodash');
var Backbone = require('backbone');


module.exports = Backbone.View.extend({
  className: '<%= name %>'
  , events: {

  }

  , initialize: function(options) {
    console.log('Everything looks good!');

  }

  , render: function() {
    var el = this.$el;

    return this;
  }
});