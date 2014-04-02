/*global require, module */
'use strict';

var $ = require('jquery');
var _ = require('lodash');
var Backbone = require('backbone');

var template = require('hbars!src/templates/helloworld');

module.exports = Backbone.View.extend({
  className: '<%= name %>'
  , template: template
  , events: {

  }

  , initialize: function(options) {
    console.log('Everything looks good!');
  }

  , render: function() {
    var el = this.$el;
    var json = {
      world: 'World'
    }

    // templates support translations with {{$ value }}
    el.html(this.template(json));
    el.addClass(this.className);

    return this;
  }
});